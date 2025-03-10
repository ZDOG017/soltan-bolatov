'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CodePlayground() {
  const [code, setCode] = useState(`function greeting() {
  return "Hello, world!";
}

// Try editing this code!
// The result will update in real-time.
console.log(greeting());`);
  
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  
  const runCode = () => {
    try {
      // Create a safe environment to run the code
      const consoleOutput: string[] = [];
      const safeConsole = {
        log: (...args: any[]) => {
          consoleOutput.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' '));
        },
        error: (...args: any[]) => {
          consoleOutput.push(`Error: ${args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' ')}`);
        }
      };
      
      // Execute the code with the safe console
      const executionFunction = new Function('console', code);
      executionFunction(safeConsole);
      
      setResult(consoleOutput.join('\n'));
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setResult('');
    }
  };
  
  return (
    <div className="py-12">
      <h3 className="text-xl font-semibold mb-4 text-center">Interactive Code Playground</h3>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Try editing the code below to see it run in real-time. This demonstrates my focus on creating interactive, educational experiences.
      </p>
      
      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-900 p-3 flex justify-between items-center">
          <span className="font-mono text-sm">JavaScript Playground</span>
          <button 
            onClick={runCode}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
          >
            Run Code
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-r border-gray-200 dark:border-gray-800">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 font-mono text-sm bg-white dark:bg-gray-950 focus:outline-none resize-none"
              spellCheck="false"
            />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 h-64 overflow-auto">
            <h4 className="text-sm font-medium mb-2">Output:</h4>
            {error ? (
              <div className="text-red-500 font-mono text-sm whitespace-pre-wrap">{error}</div>
            ) : result ? (
              <div className="font-mono text-sm whitespace-pre-wrap">{result}</div>
            ) : (
              <div className="text-gray-400 italic text-sm">Click "Run Code" to see the result</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 