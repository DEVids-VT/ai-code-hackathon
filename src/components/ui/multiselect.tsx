import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface MultiSelectProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder,
}: MultiSelectProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {value.length === 0 ? (
            <span>{placeholder || 'Select items...'}</span>
          ) : (
            <span>{value.join(', ')}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search items..." />
          <CommandEmpty>No items found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option}
                onSelect={() => {
                  onChange(
                    value.includes(option)
                      ? value.filter((item) => item !== option)
                      : [...value, option]
                  );
                }}>
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value.includes(option) ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
