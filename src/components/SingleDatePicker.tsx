import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';

import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { cn } from './utils';

interface ISingleDatePickerProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  dateFormat?: string;
  showIcon?: boolean;
}

function SingleDatePicker({
  date,
  onDateChange,
  placeholder = 'Select date',
  className,
  dateFormat = 'PPP',
  showIcon = true,
}: ISingleDatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        className={'border-input'}
        render={
          <Button
            data-empty={!date}
            className={cn(
              'justify-start text-left font-normal data-[empty=true]:text-muted-foreground',
              className,
            )}
            variant="outline"
          >
            {showIcon && <CalendarIcon className="size-4" />}
            {date ? format(date, dateFormat) : <span>{placeholder}</span>}
          </Button>
        }
      />
      <PopoverContent className={'w-fit'}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default SingleDatePicker;
