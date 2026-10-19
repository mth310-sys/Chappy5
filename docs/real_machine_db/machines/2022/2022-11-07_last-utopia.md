# ラストユートピア

recordNo: 1531
machineName: ラストユートピア
manufacturer: ピーセカンド製造 / パイオニア販売
formalModel: SラストユートピアMY
inspectionCode: 1S1578
releaseDate: 2022-11-07
generation: 6号機
systemType: ノーマル / 完全告知 / BIG偏重型

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.7%
- 設定3: 100.4%
- 設定4: 102.9%
- 設定5: 105.0%
- 設定6: 108.0%

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### BIG
- 設定1: 1/228
- 設定2: 1/227
- 設定3: 1/226
- 設定4: 1/220
- 設定5: 1/215
- 設定6: 1/208

### REG
- 設定1: 1/712
- 設定2: 1/704
- 設定3: 1/661
- 設定4: 1/537
- 設定5: 1/492
- 設定6: 1/414

### ボーナス合算
- 設定1: 1/173
- 設定2: 1/172
- 設定3: 1/168
- 設定4: 1/156
- 設定5: 1/149
- 設定6: 1/138

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 設定1: 約37.7G/50枚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- 非該当（AT/ART非搭載のノーマルタイプ）。

## basicPayout
- BIG: 純増252枚。
- REG: 純増104枚。
- HAZUSE配当表上はBIG「280枚を超える払い出しで終了」、REG「98枚を超える払い出しで終了」。実獲得枚数とは定義を分離する。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルタイプ。
- 天井非搭載。
- 設定1のBIG比率は約76%、設定6は約67%。
- ボーナス当選契機は単独約60% / 小役重複約40%とされる。
- 告知はレバーON時10% / 第3停止時90%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_NOT_APPLICABLE_NORMAL_TYPE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 本機は天井・周期・AT/CZモード・有利区間管理を用いるAT/ART機ではなく、通常時は独立したボーナス抽選を行うノーマルタイプ。
- 設定変更時にホール経営/朝一狙いへ影響する「ゲーム数天井」「周期」「朝一専用モード」「有利区間」「CZスルー回数」等のリセット対象は `NOT_APPLICABLE`。
- 設定変更時だけ適用されるボーナス当選率優遇・朝一専用抽選は、検索語・資料系統を変えて再探索したが公開確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時に引き継ぐ天井ゲーム数・周期・AT/CZモード・有利区間は `NOT_APPLICABLE`。
- 通常時のボーナス抽選は設定値に応じたノーマルタイプの抽選を継続する。

### powerCycleBehavior
- 純電源OFF→ON時に維持/リセットされる天井・周期・AT/CZモード・有利区間は `NOT_APPLICABLE`。
- 純電断だけで朝一ボーナス確率が変化する公開仕様は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の電源OFF→ON時の演出/ランプ初期化契約は、再探索後も実用的な公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ゲーム数天井を持たないため、天井進行としてのゲームカウンタRESET/CARRY_OVERは `NOT_APPLICABLE`。
- データ表示器等の外部ホールカウンタ挙動は実機内部仕様とは分離し、本DB対象外。

### ceilingAfterReset
- 天井非搭載。
- 設定変更時短縮天井: `NOT_APPLICABLE`。

### modeAfterReset
- AT/CZの内部モード・周期モード非搭載のため `NOT_APPLICABLE`。
- 設定変更専用モード振り分け: `NOT_APPLICABLE`。

### stateAfterReset
- 朝一客AIへ影響する公開「高確/低確」等の内部状態管理は確認されず `NOT_APPLICABLE_FOR_YARDSTICK`。
- 設定変更時のボーナス確率優遇状態等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- ノーマルタイプとして有利区間による通常時進行管理を行う機種ではなく、本DBの朝一有利区間RESET/CARRY_OVER項目は `NOT_APPLICABLE`。

### resetBenefits
- 設定変更による天井短縮、朝一高モード、CZ優遇、ポイント優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機の朝一価値はリセット恩恵ではなく、投入設定そのものと通常の設定判別要素に依存する。

### resetPenalties
- 設定変更により失われる天井進行・周期・モード・ポイント等は `NOT_APPLICABLE`。
- 公開された設定変更専用の不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 天井/周期/有利区間ランプによる設定変更判別は `NOT_APPLICABLE`。
- 本機固有のリールガックン条件・発生率は `UNVERIFIED_AFTER_RESEARCH`。
- 朝一の見た目だけで設定変更/据え置きを確定できる公開判別法は `PUBLIC_METHOD_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- 通常天井: 非搭載。
- リセット短縮天井: `NOT_APPLICABLE`。
- 設定変更専用モード振り分け: `NOT_APPLICABLE`。
- 設定変更専用朝一当選率/恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更時のみ適用される比較可能な朝一数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常の設定別BIG/REG/合算確率は性能コアとして別項目に保持し、朝一専用数値へ転用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `ラストユートピア / SラストユートピアMY / 1S1578 / ピーセカンド / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / モード / 状態 / 有利区間 / 判別` を組み替えて再探索。
- メーカー公式、業界ニュース、HAZUSE、K-Navi、一撃、ちょんぼりすた、2-9伝説、当時新台解説、実機販売資料を横断。
- 天井非搭載のノーマルタイプにAT機用のRESET/CARRY_OVER契約を推測適用しない。

## sources
取得日: 2026-09-13

1. パイオニア公式 — 「ラストユートピア」発売のお知らせ
   - https://www.slot-pioneer.co.jp/information/last_utopia.html
   - メーカー公式発売情報。
   - reliability: OFFICIAL
2. パイオニア公式 — その他機種一覧
   - https://www.slot-pioneer.co.jp/products/30.html
   - ラストユートピア、製造元ピーセカンド、2022年11月発売。
   - reliability: OFFICIAL
3. P-WORLD / グリーンべると — パイオニア新台発表
   - https://news.p-world.co.jp/articles/21612/greenbelt
   - 2022-11-07導入、BIG/REG/合算、出玉率、50枚ベース、獲得枚数。
   - reliability: INDUSTRY_HIGH
4. P-WORLD / 遊技通信 — 超BB特化スペック
   - https://news.p-world.co.jp/articles/21574/yugitsushin
   - 型式SラストユートピアMY、ピーセカンド製、BB252枚/RB104枚、11月上旬導入予定。
   - reliability: INDUSTRY_HIGH
5. HAZUSE — ラストユートピア
   - https://hazuse.com/machine/pachislot/1S1578/
   - 6号機ノーマル、型式SラストユートピアMY、検定番号1S1578、2022-11-07、設定別BR/機械割、37.7G/50枚、ボーナス払い出し条件。
   - reliability: ANALYSIS_HIGH
6. PiDEA — 2022年11月導入機種スペック評価
   - https://pidea.jp/articles/1663312103
   - 37.7G/50枚、BB252枚/RB104枚、設定別BRレンジ、天井非搭載。
   - reliability: INDUSTRY
7. 2-9伝説 — ラストユートピア スペック解析
   - https://2-9densetsu.com/lastutopia/
   - 天井なし、設定別機械割/BR/合算、2022-11-07導入。
   - reliability: ANALYSIS_SINGLE
8. K-Navi — ラストユートピア
   - https://p-kn.com/slot/3855/
   - ノーマルタイプ、導入日、設定別BR、BIG252枚。
   - reliability: ANALYSIS_HIGH
9. 一撃 — ラストユートピア
   - https://1geki.jp/slot/s_last_utopia/
   - 設定別合算/出玉率、導入日、ノーマル完全告知ゲーム性。
   - reliability: ANALYSIS_HIGH
10. ちょんぼりすた — ラストユートピア
   - https://chonborista.com/slot/pionia-slot/175792/
   - 設定別BR、BB比率、ゲーム性。
   - reliability: ANALYSIS_HIGH

## missingFields
- 本機固有の純電源OFF→ON時の演出/ランプ初期化挙動: UNVERIFIED_AFTER_RESEARCH
- 本機固有のリールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一当選率/恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 主要性能コアに実用上の数値競合なし。
- HAZUSE表記のメーカー名に誤植とみられる「バイオニア」があるため、パイオニア公式・業界発表をcanonicalとする。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_NOT_APPLICABLE_NORMAL_TYPE
confidence: HIGH
