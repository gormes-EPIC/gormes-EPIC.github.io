Your crew has one shot to break into the vault. Sneak past the guards, grab what loot you can, then spin the vault’s two combination dials to crack it open.The bank’s security computer runs the program below. Trace is by hand to figure out exactly what it does, including the final vault code at the end. 

```
def crack_the_vault(left_dial, right_dial):
    print(f"Cracking the vault with dials at ({left_dial}, {right_dial})")
    return spin_dial(left_dial) ** 2 + spin_dial(right_dial) ** 2 - left_dial * right_dial

def sneak_past_guards(distance, guards):
    print(f"Sneaking in: {distance} meters from the vault, {guards} guards on patrol")
    rooms_cleared = 0
    while distance > guards:
        if distance % 2 == 0:
            distance = distance // 2
        else:
            distance = distance - 3
        guards = guards + 1
        rooms_cleared = rooms_cleared + 1
    return grab_the_loot(distance, guards, rooms_cleared)

def grab_the_loot(gold_bars, diamonds, rooms_cleared):
    print(f"Grabbing loot: {gold_bars} gold, {diamonds} diamonds, {rooms_cleared} rooms cleared")
    loot_bag = 0
    for room in range(1, rooms_cleared + 1):
        if gold_bars > diamonds:
            gold_bars = gold_bars - room
            loot_bag = loot_bag + diamonds
        else:
            diamonds = diamonds - room
            loot_bag = loot_bag + gold_bars
    return loot_bag - crack_the_vault(gold_bars, diamonds)

def spin_dial(position):
    print(f"Spinning a dial starting at {position}")
    click = 1
    setting = position
    while click < 20:
        if setting % 4 == 0:
            setting = setting // 4 + click
        elif setting % 2 == 0:
            setting = setting + 5
        else:
            setting = setting - click
        click = click * 3
    return setting

print("FINAL VAULT CODE:", sneak_past_guards(1, 5))
```