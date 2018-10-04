def subsets(set)
	subsets = []
	(set.size+1).times do |n|
		subsets << set.combination(n).to_a
	end
	subsets
end

p subsets([1,4,6,3,7])


def puppy_golden_age(puppies_popu)
	sum = 0
	greatest = 0
	result = []
	for i in 0...puppies_popu.size
		sum = 0
		for j in i...puppies_popu.size
			sum += puppies_popu[j]
			if sum > greatest
				greatest = sum
				result[0], result[1] = i , j
			end
		end
	end
	result
end

p puppy_golden_age([100, -101, 200, -3, 1000])

def combine_arrays(ary1, ary2)
	result = []
	c_arrays(ary1, ary2, 0, 0,result)
	result
end

def c_arrays(x, y, index_x, index_y, result)
	return if x.size == index_x and y.size == index_y

	if x.size == index_x
		result << y[index_y]
		index_y += 1
	elsif y.size == index_y
		result << ary1[index_x]
		index_x += 1
	elsif x[index_x] < y[index_y]
		result << x[index_x]
		index_x += 1
	else
		result << y[index_y]
		index_y += 1
	end

	c_arrays(x, y, index_x, index_y, result)

	result
end

p combine_arrays([1, 3, 5], [2, 4, 6])