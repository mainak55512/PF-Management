# ❄️  SNOW Provident Fund (PF) Management Showcase (ServiceNow)

This project is a **ServiceNow Custom Application showcase implementation** demonstrating how to manage **PF (Provident Fund) contributions, withdrawals, nominations, and validations** using **Business Rules, Script Includes, and Client Scripts**.

⚠️ **Note**: This is a **demo project** meant for learning and portfolio showcase. It is **not intended for production or end-user deployment**.

---

## 📌 Overview

The `snowIT PF Management` application simulates how an organization might handle employee **PF accounts** inside ServiceNow.

It demonstrates:

* 🔄 Automatic calculation of total PF contributions via **Business Rule**
* 🧾 Dynamic data fetching using **Script Include + GlideAjax**
* 🎛️ Client-side validation and form automation via **Client Scripts** (OnChange, OnSubmit, OnLoad)
* ✅ Data integrity rules for PAN, UAN, and nomination percentages

---

## 📂 Project Structure

```
snowIT_PF_Management/
├── Business Rule
│   └── Calculates & updates total contributions after insert
├── Script Include
│   └── get_pf_details (Ajax Processor: fetch PF details, validate nominations)
├── Client Scripts
│   ├── OnChange  (PF account autofill, PAN & UAN validation)
│   ├── OnSubmit  (auto-generate PF number, set dates)
│   └── OnLoad    (set fields read-only when appropriate)
└── README.md
```

---

## ⚙️ Key Components

### 1️⃣ Business Rule – *After Insert*

* Triggered whenever a new **PF contribution record** is inserted.
* Aggregates all contributions & withdrawals for the member.
* Updates the **total contribution** field dynamically.

🔑 Logic:

```js
if contribution_type == 'contribution' → add amount  
if contribution_type == 'withdrawal' → subtract amount  
```

---

### 2️⃣ Script Include – *get\_pf\_details* (Ajax Processor)

Provides server-side utility functions accessible from client scripts:

* **getPfMemberNumber** → Returns PF number & member name for a given `member_id`.
* **checkValidNominationEntry** → Ensures total nominee percentages do not exceed **100%**.

---

### 3️⃣ Client Scripts

#### 🔹 OnChange Scripts

* Auto-fetch PF account & member name when `member_id` changes (via GlideAjax).
* Validate **PAN** format (`ABCDE1234F`).
* Validate **UAN** format (12 digits).

#### 🔹 OnSubmit Scripts

* Auto-generate **PF number** based on `member_id`, `PAN`, and `UAN`.
* Auto-fill **contribution date** and **nomination date** on form submission.

#### 🔹 OnLoad Scripts

* Dynamically set fields as **read-only** once filled (`member_id`, `contribution_month`, `pf_number`, etc.) to preserve integrity.

---

## 🔄 Workflow Example

1. User enters PF contribution details.
2. Business Rule automatically updates **total contribution**.
3. Client Script fetches PF account details & validates inputs.
4. On form submission, PF number is **auto-generated** and dates are set.
5. Nominations are validated to ensure the **total percentage ≤ 100%**.

---

## 🛠️ Technologies Used

* **ServiceNow** (Scoped App)
* **Business Rules**
* **GlideRecord & GlideAggregate**
* **Script Include (AjaxProcessor)**
* **Client Scripts (OnChange, OnSubmit, OnLoad)**

---

## 🎯 Purpose

✔ Showcase how **ServiceNow customization** can handle **financial / compliance workflows**.
✔ Demonstrate integration of **server-side and client-side logic**.
✔ Provide a portfolio-ready example of **real-world ITSM customization**.

---

## 📜 License

MIT License – for learning and demonstration purposes.
