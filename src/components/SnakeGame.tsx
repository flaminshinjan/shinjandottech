'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface GameStats {
  score: number;
  highScore: number;
  level: number;
  foodEaten: number;
}

const GRID_SIZE = 12;
const INITIAL_SNAKE: Position[] = [{ x: 6, y: 6 }];
const INITIAL_FOOD: Position = { x: 8, y: 8 };
const INITIAL_DIRECTION: Position = { x: 1, y: 0 };

export function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    highScore: 0,
    level: 1,
    foodEaten: 0
  });
  
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const gameSpeed = Math.max(100, 300 - (stats.level - 1) * 20);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setIsGameRunning(false);
    setStats(prev => ({
      ...prev,
      score: 0,
      level: 1,
      foodEaten: 0
    }));
  }, []);

  const checkCollision = useCallback((head: Position, snakeBody: Position[]): boolean => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    
    // Self collision
    return snakeBody.some(segment => segment.x === head.x && segment.y === head.y);
  }, []);

  const moveSnake = useCallback(() => {
    if (!isGameRunning || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      // Move head
      head.x += direction.x;
      head.y += direction.y;
      
      // Check collision
      if (checkCollision(head, newSnake)) {
        setGameOver(true);
        setIsGameRunning(false);
        return currentSnake;
      }
      
      newSnake.unshift(head);
      
      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        const newFoodEaten = stats.foodEaten + 1;
        const newScore = stats.score + (10 * stats.level);
        const newLevel = Math.floor(newFoodEaten / 5) + 1;
        
        setStats(prev => ({
          ...prev,
          score: newScore,
          highScore: Math.max(prev.highScore, newScore),
          level: newLevel,
          foodEaten: newFoodEaten
        }));
        
        setFood(generateFood());
      } else {
        newSnake.pop();
      }
      
      return newSnake;
    });
  }, [isGameRunning, gameOver, direction, food, stats, checkCollision, generateFood]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isGameRunning) return;
    
    const { key } = e;
    
    // Prevent default scrolling behavior for arrow keys and WASD
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'W', 's', 'S', 'a', 'A', 'd', 'D', ' '].includes(key)) {
      e.preventDefault();
    }
    
    switch (key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      case ' ':
        setIsGameRunning(prev => !prev);
        break;
    }
  }, [direction, isGameRunning]);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setStats(prev => ({ ...prev, highScore: parseInt(savedHighScore) }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('snakeHighScore', stats.highScore.toString());
  }, [stats.highScore]);

  useEffect(() => {
    if (isGameRunning && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, gameSpeed);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isGameRunning, gameOver, moveSnake, gameSpeed]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const startGame = () => {
    if (gameOver) {
      resetGame();
    }
    setIsGameRunning(true);
  };

  const pauseGame = () => {
    setIsGameRunning(false);
  };

  return (
    <div className="space-y-3">
      {/* Compact Stats */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-[#E85D4C]">{stats.score}</div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-[#F4C155]">{stats.highScore}</div>
          <div className="text-xs text-muted-foreground">Best</div>
        </div>
      </div>

      {/* Compact Game Board */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3">
        <div 
          className="grid bg-black/40 dark:bg-black/60 rounded-lg p-1 border border-white/10 mx-auto"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            gap: '1px',
            width: '240px',
            height: '240px'
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isHead = snake[0]?.x === x && snake[0]?.y === y;
            const isFood = food.x === x && food.y === y;
            
            return (
              <div
                key={index}
                className={`rounded-sm transition-all duration-150 ${
                  isHead
                    ? 'bg-gradient-to-br from-[#E85D4C] to-[#F4C155] shadow-sm'
                    : isSnake
                    ? 'bg-gradient-to-br from-[#E85D4C]/80 to-[#F4C155]/80'
                    : isFood
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 animate-pulse shadow-sm'
                    : 'bg-white/5 dark:bg-white/10'
                }`}
              />
            );
          })}
        </div>
        
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <div className="text-center text-white space-y-2">
              <h3 className="text-base font-bold">Game Over!</h3>
              <p className="text-sm">Score: {stats.score}</p>
              <button
                onClick={startGame}
                className="px-3 py-1 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white text-sm font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Compact Controls */}
      <div className="flex gap-2">
        {!isGameRunning && !gameOver && (
          <button
            onClick={startGame}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white text-sm font-bold rounded-lg hover:scale-105 transition-transform"
          >
            <Play className="w-3 h-3" />
            Start
          </button>
        )}
        
        {isGameRunning && (
          <button
            onClick={pauseGame}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-white/10 border border-white/20 text-foreground text-sm font-bold rounded-lg hover:bg-white/20 transition-all"
          >
            <Pause className="w-3 h-3" />
            Pause
          </button>
        )}
        
        <button
          onClick={resetGame}
          className="flex items-center justify-center gap-1 px-3 py-2 bg-white/10 border border-white/20 text-foreground text-sm font-bold rounded-lg hover:bg-white/20 transition-all"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Compact Info */}
      <div className="bg-gradient-to-br from-[#E85D4C]/10 to-[#F4C155]/10 border border-[#E85D4C]/20 rounded-lg p-2">
        <div className="text-xs text-muted-foreground space-y-1">
          <div>Level {stats.level} • Food: {stats.foodEaten}</div>
          <div>↑↓←→ or WASD • SPACE pause</div>
        </div>
      </div>
    </div>
  );
} 