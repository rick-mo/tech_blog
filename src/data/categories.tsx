import React from 'react';
import { FaReact, FaPython, FaJs, FaBookmark } from 'react-icons/fa';
import { RiTodoLine } from 'react-icons/ri';

export const categories = [
  {
    id: '開発系',
    items: [
      { id: 'React', to: '/react', icon: <FaReact /> },
      { id: 'Python', to: '/python', icon: <FaPython /> },
      { id: 'JavaScript', to: '/js', icon: <FaJs /> },
      { id: '深層学習', to: '/deepLearning', icon: null },
    ],
  },
  {
    id: 'その他',
    items: [
      { id: '参考記事', to: '/others/bookmark', icon: <FaBookmark /> },
      { id: 'TODO', to: '/others/todo', icon: <RiTodoLine /> },
    ],
  },
];
