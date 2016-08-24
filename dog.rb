class Dog

	def initialize(args)
		@name = args.fetch(:name, "Puddles")
		@breed = args.fetch(:breed, "Corgy")
		@age = args.fetch(:age, "1")
	end

  def bark
    puts "Woof woof"
  end
  
end

dog = Dog.new({name: "Chancy", breed: "Dalmation", age: 11})
dog.bark

