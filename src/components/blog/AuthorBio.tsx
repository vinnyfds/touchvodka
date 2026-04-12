import React from 'react';
import { Author } from '../../types/blog';

interface AuthorBioProps {
  author: Author;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
    <div className="border-4 border-black bg-neutral-50 p-6 my-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-start gap-4">
        {author.avatar && (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-16 h-16 rounded-full border-4 border-black object-cover flex-shrink-0"
          />
        )}
        <div className="flex-1">
          <h4 className="font-display uppercase tracking-tighter mb-2">About {author.name}</h4>
          <p className="font-mono text-sm opacity-80 mb-4">{author.bio}</p>
          {author.social && (
            <div className="flex gap-3">
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-mono text-xs uppercase"
                >
                  Twitter
                </a>
              )}
              {author.social.instagram && (
                <a
                  href={author.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-mono text-xs uppercase"
                >
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
