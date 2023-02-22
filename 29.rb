class Order
  attr_accessor :date, :amount

  def initialize(date, amount)
    @date = date
    @amount = amount
  end
end

class Shop
  def initialize
    @orders = []
  end

  def run
    puts "Welcome to My Shop"
    # loop do
      puts "\nToday's Details: "
      puts "Total Order #: #{@orders.length}"
      puts "Total Amount: #{total_amount}"
      puts "Minimum Order: #{minimum_order}"
      puts "Maximum Order: #{maximum_order}"
      puts "Average Order: #{average_order}"
    loop do
      puts "\n1 Create New Order"
      puts "2 Print Day Details"
      puts "3 Print Month Details"
      puts "How may I help you?(1, 2, 3 or quit)"
      input = gets.chomp.downcase
      case input
      when "1"
        create_order
      when "2"
        print_day_details
      when "3"
        print_month_details
      when "q", "quit"
        break
      else
        puts "Invalid."
      end
    # end
    end
  end

  require "date"
  def create_order
    puts "Create New Order: "
    str = gets.chomp.split
    # date = Date.strptime(str, '%d-%m-%Y')
    date = str[0]
    amount = str[1].to_i
    # amount = gets.chomp.to_i
    order = Order.new(date, amount)
    @orders << order
    puts "\nToday's Details: #{order.date}"
    puts "Total Order #: #{@orders.length}"
    puts "Total Amount: #{total_amount}"
    puts "Minimum Order: #{minimum_order}"
    puts "Maximum Order: #{maximum_order}"
    puts "Average Order: #{average_order}"
  end

  def print_day_details
    puts "Print Day Details:"
    date = gets.chomp
    # dates = Date.strptime(strr, '%d-%m-%Y')
    orderss = @orders.select { |order| order.date == date }
    puts "Todays Details:#{date}"
    puts "Total Order: #{orderss.length}"
    puts "Total Amount: #{orderss.map(&:amount).reduce(&:+)}"
    puts "Minimum:  #{orderss.map(&:amount).min}"
    puts "Maximum:  #{orderss.map(&:amount).max}"
    puts "Average:  #{orderss.map(&:amount).reduce(&:+) / orderss.length}"        
  end

  def print_month_details
    puts "Print Month Details"
    str = gets.chomp.split(" ")
    month = str[0].to_i
    year = str[1].to_i
    orders = @orders.select do |order|
      order_date = Date.parse(order.date)
      order_date.month == month && order_date.year == year
      # puts "Today's Details : #{order_date}"
      # puts "Total Amount: #{orders.map(&:amount).reduce(&:+)}"
    end
    # puts "Todays Details:}"
    puts "Total Order: #{orders.length}"
    puts "Total Amount: #{orders.map(&:amount).reduce(&:+)}"
    puts "Minimum : #{orders.map(&:amount).min}"
    puts "Maximum : #{orders.map(&:amount).max}"
    puts "Average  :#{orders.map(&:amount).reduce(&:+) / orders.length}"        
  end
  
  def total_amount
    @orders.map(&:amount).reduce(&:+)
  end

  def minimum_order
    @orders.map(&:amount).min
  end

  def maximum_order
    @orders.map(&:amount).max
  end

  def average_order
    return 0 if @orders.empty?

    total_amount / @orders.length
  end
end

shop = Shop.new
shop.run
