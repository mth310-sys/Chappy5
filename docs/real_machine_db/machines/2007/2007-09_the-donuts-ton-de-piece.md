# ザ・ドゥーナッツのトンdeピース

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: ザ・ドゥーナッツのトンdeピース
manufacturer: ラスター
releaseDate: 2007-09
generation: 5号機初期
systemType: ボーナス + CZ + 500G完走型RT
formalModel: トンデピースZ

## releaseDate / identification

- 5号機クロニクル、pacnk、後年の機種回顧はいずれも2007年9月導入で一致。
- 当時のパチスロ業界初まとめ保存資料では `ザ・ドゥーナッツのトンdeピースZ` を「既に発売確定（9/中）」として掲載。
- Pマンズ保存記事は2007-08-07時点でラスターが販売開始したことを報じるが、ホール納品日の具体日までは記載しない。
- K-Naviは2007-10-02に都内ホールで本機を使ったイベントが行われたことを報告。
- 具体納品日の一次資料は今回確定できなかったため、releaseDateは推測せず月精度 `2007-09` とする。

信頼度: INDUSTRY_ARCHIVE / ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 95.0% |
| 2 | 97.0% |
| 3 | 100.0% |
| 4 | 102.0% |
| 5 | 104.0% |
| 6 | 105.0% |

5号機クロニクルとpacnkで一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | PIG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/242.70 | 1/546.10 | 1/168.0 |
| 2 | 1/234.10 | 1/546.20 | 1/163.8 |
| 3 | 1/226.00 | 1/504.10 | 1/156.0 |
| 4 | 1/218.50 | 1/504.20 | 1/152.4 |
| 5 | 1/211.40 | 1/468.10 | 1/145.6 |
| 6 | 1/204.80 | 1/468.20 | 1/142.5 |

- BIG/PIGはpacnkと保存スペック資料で一致。
- 合算はK-Naviと保存スペック資料で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ掲載値:

- 設定共通: **31.99G / 1000円（50枚相当）**

信頼度: ANALYSIS_HIGH

## netIncrease

500G完走型RT「スーパーボーナス」:

- 1Gあたり純増: **約+0.43枚/G**（パチマガスロマガ）
- 当時保存資料では約 **+0.4枚/G** と記載し、丸め差として整合。
- 継続: **500G**
- ボーナス成立・入賞・消化でもRT状態を引き継ぐ貫通型2種BB構造。

信頼度: ANALYSIS_HIGH / INDUSTRY_ARCHIVE

## basicPayout

パチマガスロマガ:

- BIG: 253枚超払い出しで終了、純増約170枚
- PIG: 79枚超払い出しで終了、純増約50枚

P-WORLD / K-Naviも253枚・79枚の規定払い出し終了条件を確認。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### RT / CZ構造

- 通常時はリプレイ入賞を契機に180Gの低性能RT（後年の専門回顧では「ダメRT」）へ移行。
- 180G消化後にチャンスゾーンへ移行。
- CZ中、リプレイより先にトウモロコシ図柄が成立すると500G完走型RT「スーパーボーナス」へ突入。
- パチマガスロマガ掲載の通常時トウモロコシ確率は1/10.08、通常時リプレイは1/7.30。
- 500G RT終了後にも再度CZからRTへつながる可能性があり、RTループがゲーム性の中心。
- 500G RTはボーナスを引いても終了せず、ボーナス消化中もRTゲーム数が進行する貫通型構造。

## resetBehavior

resetBehaviorQA: PARTIAL

`ザ・ドゥーナッツのトンdeピース / ザ・ドゥ-ナッツ / トンdeピース / トンデピースZ / ラスター` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 180G / CZ / 500G RT / ガックン / 天井` を組み替え、当時解析、P-WORLD/K-Navi、保存業界資料、5号機回顧を横断して再探索。

### settingChangeBehavior

- 設定変更時に180G低性能RTの残G、CZ、500G RT残Gがリセットされるか引き継ぐかを直接明記した高信頼資料: UNVERIFIED。
- 設定変更専用の短縮・朝一優遇モード・専用当選率: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時の180G低性能RT/CZ/500G RT残Gの扱い: UNVERIFIED。
- 構造上180G周期/CZが存在するが、営業日跨ぎの内部カウンタ引継ぎは推定しない。

### powerCycleBehavior

- 電源OFF→ONのみでの180G低性能RT/CZ/500G RT状態の保持・初期化: UNVERIFIED。
- 設定変更挙動から電断挙動を推定しない。

### gameCounterReset

- 一般的な通常時ハマリ天井: NONE_CONFIRMED。
- 180Gはボーナス間天井ではなく、低性能RT終了からCZへ至るゲーム性上の周期。
- 設定変更/据え置き/電断による当該180G内部カウンタのリセット・引継ぎ: UNVERIFIED。

### ceilingAfterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- リセット時短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード / 設定変更時モード振り分け: NONE_CONFIRMED。
- 180G低性能RT→CZ→500G RTという通常ゲーム構造は確認済みだが、変更時の開始地点はUNVERIFIED。

### stateAfterReset

- 設定変更/据え置き/電源OFF→ON時の低性能RT/CZ/500G RT内部状態処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

### resetBenefits

- 朝一/設定変更専用の公開恩恵: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のリールガックン、初期出目、液晶状態等による設定変更/据え置き判別: UNVERIFIED。
- 180G周期の見え方から前日状態を推測できる可能性はあるが、営業日跨ぎの状態保持が未確定のため判別手段として断定しない。

### numericResetData

- 設定変更時専用モード振り分け: NONE_CONFIRMED
- リセット時短縮天井G数: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. Pマンズ保存記事 — ラスターが「ザ・ドゥーナッツのトンデピース」（2007-08-07）
   - https://p-mans.blogspot.com/2007/08/
   - ラスター販売開始、一定通常G数後のCZ、500G RT、RT後再CZ
   - reliability: INDUSTRY_ARCHIVE
2. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 型式 `トンデピースZ`、2007年9月中発売確定、500G完走型RT約0.4枚/G、ボーナスでもRT非終了
   - reliability: INDUSTRY_ARCHIVE
3. パチマガスロマガ — ザ・ドゥーナッツのトンdeピース 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/16/a.php
   - 500G完走型RT、BIG約170枚、PIG約50枚
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役・RT解析
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/16/c-1.php
   - 1000円31.99G、RT500G純増+0.43枚/G、通常時小役/CZ関連数値
   - reliability: ANALYSIS_HIGH
5. K-Navi — ザ・ドゥ-ナッツのトンdeピース
   - https://p-kn.com/slot/563/
   - 設定別ボーナス合算、規定払い出し、CZ/RT概要
   - reliability: ANALYSIS_HIGH
6. P-WORLD — ザ・ドゥーナッツのトンdeピース
   - https://www.p-world.co.jp/machine/database/4868
   - 型式 `トンデピースZ`、5号機、規定払い出し条件
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — ラスター5号機全機種一覧
   - https://5goki.com/luster
   - 2007/9導入、設定別機械割95.0〜105.0%
   - reliability: ANALYSIS_SINGLE
8. pacnk — ザ・ドゥーナッツのトンdeピース 設定判別ツール
   - https://pacnk.com/slot/tools/sh_zadunattsunotondepisu.html
   - 設定別BIG/PIG、機械割
   - reliability: ANALYSIS_SINGLE
9. パチ7 — 佐々木真の思考ルーチン episode.20
   - https://pachiseven.jp/articles/detail/18289
   - 180G低性能RT→CZ→500G RT、ボーナス中もRT状態/ゲーム数を引き継ぐ貫通型構造の技術的回顧
   - reliability: ANALYSIS_HIGH
10. K-Navi業界ニュース — グランパ中野店イベント（2007-10-16掲載）
   - https://p-kn.com/topics/news/382/
   - 2007-10-02時点で都内ホール稼働を確認する時点証拠
   - reliability: INDUSTRY

## missingFields

性能コアは主要物差し値を取得済み。

resetBehaviorの未確定:
- 設定変更時の180G低性能RT/CZ/500G RT残G・内部状態処理
- 据え置き時の同状態/内部カウンタ引継ぎ
- 電源OFF→ONのみでの同状態処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 現時点で性能コアの明確な競合は確認していない。
- RT純増はパチマガスロマガ `+0.43枚/G`、当時保存資料 `約0.4枚/G` であり、丸め差として整合するためCONFLICT扱いしない。
