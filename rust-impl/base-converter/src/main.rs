fn main() {
    let result = base_to_number("101101", 2);
    println!("Result: {}", result);
}

fn base_to_number(input: &str, base: u32) -> f32 {
    let splitted: Vec<&str> = input.split(".").collect();

    let characteristic_part = splitted[0];
    let mantissa_part = if splitted.len() > 1 { splitted[1] } else { "" };

    let shifted_input = format!("{}{}", characteristic_part, mantissa_part);
    let shifted_input: Vec<char> = shifted_input.chars().collect();

    let mut number: f32 = 0.0;

    for (i, bit) in shifted_input.iter().enumerate() {
        let bit = bit.to_digit(10).unwrap();
        number += (bit * base).pow((shifted_input.len() - i - 1) as u32) as f32;
    }

    number / (base.pow(mantissa_part.chars().count() as u32)) as f32
}
