def fizz_buzz(number)
  if number_is_of_wrong_type?(number)
    return_error_message(number.class.name)
  elsif number_is_negative?(number)
    return_error_message('negative')
  elsif number_is_divisible_by_fifteen(number)
    return 'fizzbuzz'
  elsif number_is_divisible_by_three(number)
    return 'fizz'
  elsif number_is_divisible_by_five(number)
    return 'buzz'
  else
    return number
  end
end

def number_is_negative?(number)
  number <= 0
end

def number_is_of_wrong_type?(number)
  !number.is_a? Integer
end

def return_error_message(type)
  case type
  when 'negative'
    reason = 'Negative numbers'
  else
    reason = [type, 's'].join('')
  end
  "This is not possible - #{reason} are not allowed"
end

def number_is_divisible_by_fifteen(number)
  has_zero_as_reminder(number, 15)
end

def number_is_divisible_by_three(number)
  has_zero_as_reminder(number, 3)
end

def number_is_divisible_by_five(number)
  has_zero_as_reminder(number, 5)
end

def has_zero_as_reminder(number, divider)
  number % divider == 0
end
