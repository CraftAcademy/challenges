require './lib/fizz_buzz'

describe 'fizz buzz method' do

  it 'returns "fizz" if number that is passed in is divisible by 3' do
    expect(fizz_buzz(6)).to eq "fizz"
  end

  it 'returns "buzz" if number that is passed in is divisible by 5' do
    expect(fizz_buzz(10)).to eq "buzz"
  end

  it 'returns "fizzbuzz" if number that is passed in is divisible by 15' do
    expect(fizz_buzz(30)).to eq "fizzbuzz"
  end

  it 'returns the number that is passed in iif no conditions are met' do
    expect(fizz_buzz(1)).to eq 1
  end

  it 'should not allow negative numbers' do
    expect(fizz_buzz(-2)).to eq "This is not possible - Negative numbers are not allowed"
  end

  it 'should not allow Strings' do
    expect(fizz_buzz('2')).to eq "This is not possible - Strings are not allowed"
  end

  it 'should not allow Floats' do
    expect(fizz_buzz(2.5)).to eq "This is not possible - Floats are not allowed"
  end

  describe '#return_error_message' do
    it 'should process message for Strings' do
      expect(return_error_message(String)).to eq "This is not possible - Strings are not allowed"
    end

    it 'should process message for Floats' do
      expect(return_error_message(Float)).to eq "This is not possible - Floats are not allowed"
    end

    it 'should process message for Negative numbers' do
      expect(return_error_message('negative')).to eq "This is not possible - Negative numbers are not allowed"
    end
  end
end
