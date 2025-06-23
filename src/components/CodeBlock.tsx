'use client';

import React, { useEffect, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';

interface CodeBlockProps {
  value: {
    filename?: string;
    code: string;
    language?: string;
  };
}

export function CodeBlock({ value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const languageMap: { [key: string]: string } = {
    'javascript': 'language-javascript',
    'js': 'language-javascript',
    'typescript': 'language-typescript',
    'ts': 'language-typescript',
    'jsx': 'language-jsx',
    'tsx': 'language-tsx',
    'css': 'language-css',
    'scss': 'language-scss',
    'html': 'language-markup',
    'bash': 'language-bash',
    'shell': 'language-bash',
    'json': 'language-json',
    'markdown': 'language-markdown',
    'md': 'language-markdown',
    'python': 'language-python',
    'py': 'language-python',
    'sql': 'language-sql',
  };

  const prismLanguage = languageMap[value.language?.toLowerCase() || ''] || 'language-markup';
  const language = value.language?.toLowerCase() || 'markup';

  useEffect(() => {
    const highlight = () => {
      if (Prism.languages[language]) {
        const html = Prism.highlight(value.code, Prism.languages[language], language);
        setHighlighted(html);
      } else {
        setHighlighted(value.code);
      }
    };

    highlight();
  }, [value.code, language]);

  return (
    <div className="my-8">
      <div className="bg-[#1e1e1e] backdrop-blur-md border border-border/30 rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#E85D4C]/10 to-[#F4C155]/10 px-6 py-3 border-b border-border/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-foreground capitalize">
              {value.filename || value.language || 'Code'}
            </span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        
        {/* Code Content */}
        <div className="relative">
          <pre className="p-6 overflow-x-auto bg-[#1e1e1e] text-sm leading-relaxed">
            <code 
              className={prismLanguage}
              dangerouslySetInnerHTML={{ __html: highlighted || value.code }}
              style={{ background: 'transparent' }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
} 