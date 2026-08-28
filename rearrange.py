import re

with open('/Users/manjithsingh/Documents/Github/mavrostech/src/pages/Home.jsx', 'r') as f:
    content = f.read()

# Current order is: Got footage -> Location -> Client Portal
# I want to change it to: Client Portal -> Got footage -> Location

# Find Got footage
contact_start = content.find('<section className="section-pad" id="contact">')
location_start = content.find('<section className="section-pad" id="location">')
contact_content = content[contact_start:location_start].strip()

# Find Location
client_portal_start = content.find('<section className="section-pad" id="client-portal">')
location_content = content[location_start:client_portal_start].strip()

# Find Client Portal
end_main = content.find('</main>')
client_portal_content = content[client_portal_start:end_main].strip()

# New content
new_content = content[:contact_start] + \
    client_portal_content + "\n\n" + \
    contact_content + "\n\n" + \
    location_content + "\n      </main>\n    </>\n  );\n}\n"

with open('/Users/manjithsingh/Documents/Github/mavrostech/src/pages/Home.jsx', 'w') as f:
    f.write(new_content)
print("Rearranged to Client Portal -> Got footage -> Location")
