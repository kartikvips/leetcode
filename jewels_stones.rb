def num_jewels_in_stones(j, s)
    jewel_hash = Hash.new(0)
    s.each_char do |el|
        jewel_hash[el] += 1
    end

    sum = 0
    j.each_char do |el|
        sum += jewel_hash[el]
    end 
    sum
end

p num_jewels_in_stones('aA', 'aAAbbbccc')