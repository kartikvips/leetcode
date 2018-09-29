
def judge_circle(moves)
return false if moves.length.odd ?
    moves_hash = Hash.new(0)
# vert = 0
# hor = 0
moves.each_char do | el |
    moves_hash[el] += 1
# if el == 'U'
#     vert += 1
# elsif el == 'D'
#     vert -= 1
# elsif el == 'L'
#     hor -= 1
# elsif el == 'R'
#     hor += 1
# end
end

# vert == 0 && hor == 0
moves_hash['U'] == moves_hash['D'] && moves_hash['L'] == moves_hash['R']
end