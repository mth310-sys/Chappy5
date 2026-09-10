# No.1262 ぱちスロ ゲッターロボ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ぱちスロ ゲッターロボ
- manufacturer: 京楽産業．
- releaseDateCanonical: 2019-01-21（全国導入）
- priorLimitedRelease: 2018-09-21（サンシャインKYORAKU栄・平針の直営2店舗で先行導入）
- generation: 6号機
- systemType: ノーマルAタイプ / ボーナス主体 / 技術介入
- formalModelNameCanonical: `SパチスロゲッターロボKB`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting
市場平均（チェリー・スイカ取得率80%条件）と完全攻略時を定義分離して保存する。

| 設定 | 市場平均 | 完全攻略時 |
|---:|---:|---:|
| 1 | 98.6% | 101.0% |
| 2 | 99.9% | 102.4% |
| 5 | 101.6% | 104.2% |
| 6 | 103.7% | 106.4% |

### initialHitBySetting
| 設定 | 赤BIG | 青BIG | BIG合算 | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/290.0 | 1/436.9 | 1/174.3 | 1/230.8 | 1/99.3 |
| 2 | 1/425.6 | 1/282.5 | 1/169.8 | 1/221.4 | 1/96.1 |
| 5 | 1/277.7 | 1/420.1 | 1/167.2 | 1/206.1 | 1/92.3 |
| 6 | 1/409.6 | 1/273.1 | 1/163.8 | 1/199.2 | 1/89.9 |

### baseGamesPer50
- **46.3～50.0G/50枚**。パチマガスロマガの設定1～6レンジをcanonical採用。
- 一撃の当時ページは「現在調査中」のままのため、欠損ソースとして扱い、既知値と競合させない。

### netIncrease / basicPayout
- RT/ART/AT非搭載のためnetIncreaseは `NOT_APPLICABLE`。
- BIG: 164枚を超える払い出しで終了。技術介入成功時 **最大155枚**。
- REG: 50枚を超える払い出しで終了。業界発表では **60枚獲得**。

## modeSpecificMinimumData
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。
- ゾーン: `NOT_APPLICABLE`。
- 通常時は `NORMAL G MODE` / `SIMPLE G MODE` の2演出モードを遊技者が選択可能。内部当選モードではなく演出選択機能なのでresetBehavior上の「内部モード」とは分離する。

## resetBehavior
### settingChangeBehavior
- 天井/通常ゲーム数カウンタ: `NOT_APPLICABLE`。
- 朝一1回目のボーナス入賞時のみ、設定変更を直接示す下パネルフラッシュ抽選が存在。
- ボーナス内部成立状態など、設定変更時の本機固有内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。ノーマルAタイプ一般論から補完しない。

### carryOverBehavior
- 据え置きを純電源OFF→ONから完全に分離した、本機固有の内部成立状態/初期出目/演出モード保持契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 朝一初回ボーナス時の下パネルフラッシュは「設定変更時のみ発生する」ため、据え置き時は非発生が判別材料になる。

### powerCycleBehavior
- 純電源OFF→ON時のボーナス内部成立状態、初期出目、遊技者選択モードの保持/初期化について、機種固有の直接資料を十分な検索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 天井・ゾーン・内部ゲーム数管理を持たないため `NOT_APPLICABLE`。

### ceilingAfterReset
- `NOT_APPLICABLE`。天井非搭載、短縮天井なし。

### modeAfterReset
- 朝一専用の内部モード、モード振り分け、モードによる当選優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- NORMAL G MODE / SIMPLE G MODE は遊技者選択の演出モードであり、内部モードとして扱わない。

### stateAfterReset
- 設定変更/据え置き/純電断で比較可能な本機固有内部状態テーブルは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 通常時にAT/ARTを用いないノーマルAタイプで、本DBの朝一狙い用「有利区間状態」比較対象としては `NOT_APPLICABLE_TO_GAMEPLAY`。
- 6号機という世代情報だけから、有利区間リセット契約を推測入力しない。

### resetBenefits
- 朝一リセットによる当選率上昇、短縮天井、CZ優遇などの出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 客側の主要価値は初回ボーナス入賞時パネルフラッシュによる変更判別。

### resetPenalties
- 設定変更時固有の出玉上不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **朝一1回目のボーナス入賞時に下パネルがフラッシュすれば設定変更確定**。パチマガスロマガと一撃で一致。
- ボーナスがBIGかREGかで発生率が異なり、設定6のみ発生率が高い。
- 天井非搭載のため前日ゲーム数+当日ゲーム数による宵越し判別は不可。
- 本機固有のリールガックン発生条件/率は、機種名・型式名・京楽・設定変更・朝一・据え置き・電源OFF ON・ガックン等へ検索語を変更しても直接資料を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
朝一1回目ボーナス入賞時の下パネルフラッシュ発生率:

| 設定 | BIG入賞時 | REG入賞時 |
|---:|---:|---:|
| 1 | 25.0% | 20.0% |
| 2 | 25.0% | 20.0% |
| 5 | 25.0% | 20.0% |
| 6 | 33.3% | 25.0% |

- 判定: フラッシュ発生 = `SETTING_CHANGE_CONFIRMED`。
- resetShortenedCeiling: `NOT_APPLICABLE`
- resetMorningHitRate: `PUBLIC_VALUE_NOT_FOUND / NO_SPECIFIC_BENEFIT_CONFIRMED`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDateDecision
- 京楽公式が2019-01-21に「全国導入スタート」と明記するため、DBの全国導入canonicalは **2019-01-21**。
- グリーンべるとと一撃は2018-09-21の京楽直営2店舗先行導入を確認。これは全国導入と混同せず `priorLimitedRelease` として保持する。

## formalModel / certification
- 型式名は複数後年実機資料で `SパチスロゲッターロボKB` を確認。別表記 `S ゲッターロボ KB` は省略表記として扱う。
- 2018-07-19の京楽検定通過一覧に `S パチスロ ゲッターロボ KB` を確認。
- 検定番号そのものは公安委員会資料・型式名・8S系検索等へ拡張したが、今回高信頼で番号を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## missingFields
- certificationNumber。
- 設定変更/据え置き/純電断別のボーナス内部成立状態・初期出目等の本機固有契約。
- 本機固有ガックン条件/率。

## conflicts
- `NONE_NUMERIC_CORE`。
- 導入日は「2018-09-21先行導入」と「2019-01-21全国導入」が資料上併存するが、対象範囲が異なるため数値CONFLICTではなくrelease scopeを分離して保持。

## sources
取得日: 2026-09-11
1. KYORAKU公式 NEWS — https://www.kyoraku.co.jp/news/20190121.php — 2019-01-21全国導入、Aタイプ、設定1合算約1/99、NORMAL/SIMPLE G MODE — reliability: `OFFICIAL`
2. グリーンべると — https://web-greenbelt.jp/00010744/ — 京楽初6号機、Aタイプ、BIG/REG/合算レンジ、BIG最大155枚/REG60枚、2018-09-21直営2店舗先行導入 — reliability: `INDUSTRY`
3. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/09/h-1.php — 設定別赤BIG/青BIG/BIG合算/REG/総合算、市場平均機械割/完全攻略時機械割 — reliability: `ANALYSIS_HIGH`
4. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/09/c.php — 50枚あたり46.3～50.0G — reliability: `ANALYSIS_HIGH`
5. パチマガスロマガ 朝イチのボーナス — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/09/en02.php — 朝一初回ボーナス入賞時パネルフラッシュ=設定変更確定、設定別BIG/REG発生率 — reliability: `ANALYSIS_HIGH`
6. 一撃 朝イチ演出 — https://1geki.jp/slot/s_getterrobo/62/ — パネルフラッシュ条件/発生率を別系統照合 — reliability: `ANALYSIS_HIGH`
7. 一撃 ボーナス確率 — https://1geki.jp/slot/s_getterrobo/1/ — 設定別赤BIG/青BIG/BIG合算/REG/総合算を照合 — reliability: `ANALYSIS_HIGH`
8. 一撃 天井/設定変更 — https://1geki.jp/slot/s_getterrobo/3/ — 天井非搭載 — reliability: `ANALYSIS_HIGH`
9. 一撃 ボーナス概要 — https://1geki.jp/slot/s_getterrobo/61/ — BIG最大155枚、REG払い出し終了条件 — reliability: `ANALYSIS_HIGH`
10. P-WORLD — https://www.p-world.co.jp/machine/database/8772 — 京楽/6号機/ノーマル、BIG最大155枚、設定別BIG/REG/合算 — reliability: `MACHINE_DB_CROSSCHECK`
11. pachinko's blog — https://pachinko.hatenablog.jp/entry/2018/09/getter-robo — 型式表記、2018-09先行/2019-01全国リリース整理 — reliability: `SECONDARY_MACHINE_HISTORY`
12. 京楽産業.検定通過機種整理 — https://q-and-a.hatenablog.com/entry/%E4%BA%AC%E6%A5%BD%E7%94%A3%E6%A5%AD%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E — 2018-07-19 `S パチスロ ゲッターロボ KB`検定通過 — reliability: `SECONDARY_ARCHIVE`

## confidence
- releaseDateCanonical: `OFFICIAL + INDUSTRY_CROSSCHECKED`
- formalModelName: `SECONDARY_CROSSCHECKED`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- performanceCore: `ANALYSIS_HIGH_CROSSCHECKED + INDUSTRY_CONTEXT`
- resetDetectionNumeric: `ANALYSIS_HIGH_CROSSCHECKED`
- resetBehaviorOther: `PARTIAL_RESEARCH_EXHAUSTED`
