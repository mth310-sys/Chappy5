# パチスロ ヘルシング

machineName: パチスロ ヘルシング
manufacturer: 北電子
releaseDate: 2014-08-04
releaseDatePrecision: exact_start
generation: 5号機
systemType: ボーナス+ART
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- 北電子公式の検定情報で型式名 **ヘルシングTH** を確認。
- HAZUSEで検定番号 **3S1259**、導入開始日 **2014-08-04**、メーカー北電子を確認。
- K-Navi、パチビー、パチトラでもホール導入開始/導入日 **2014-08-04** が一致。
- 北電子公式ニュースでは2014-06-24に本機特設サイト公開を確認。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.6% |
| 3 | 101.1% |
| 4 | 103.6% |
| 5 | 105.7% |
| 6 | 110.1% |

- パチマガスロマガではメーカー発表値として掲載。HAZUSE、P-WORLD/パチビー系とも同系列。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / MANUFACTURER_PUBLISHED_VIA_PERIOD_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合成 | ボーナス+ART合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/394.8 | 1/728.2 | 1/256.0 | 1/169.8 |
| 2 | 1/385.5 | 1/682.7 | 1/246.4 | 1/156.3 |
| 3 | 1/394.8 | 1/712.3 | 1/254.0 | 1/160.6 |
| 4 | 1/381.0 | 1/668.7 | 1/242.7 | 1/143.1 |
| 5 | 1/390.1 | 1/697.2 | 1/250.1 | 1/144.8 |
| 6 | 1/360.1 | 1/630.2 | 1/229.1 | 1/123.2 |

- パチマガスロマガではメーカー発表値。HAZUSEでも同値を確認。
- ART単独初当たりの設定別一覧は今回の現存資料では安全に固定できず、メーカー発表の「ボーナス+ART合算」を主要初当たり比較値として保持する。合算からART単独値を逆算して元データ化しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / MANUFACTURER_PUBLISHED_VIA_PERIOD_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `パチスロ ヘルシング / ヘルシングTH / 北電子` と `50枚 / 1000円 / コイン持ち / ベース / 回転数` を組み替え、北電子公式、K-Navi、HAZUSE、パチマガスロマガ、P-WORLD、パチビー、パチセブン、後年DBを再探索したが、比較可能な50枚ベース値を固定できなかった。
- confidence: UNVERIFIED

## netIncrease

- ART「ミディアンゾーン」: **約1.4枚/G**。
- 1セット **30G+α**、ゲーム数消化後に約10Gの継続バトル。
- 継続率は約33〜90%。
- K-Navi、パチマガスロマガ、P-WORLD、パチビーで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: **平均約204枚**。
- REGULAR BONUS: **平均約48枚**。
- ART「ミディアンゾーン」: 1セット30G+α + 継続バトル約10G、純増約1.4枚/G。
- 上乗せ特化「クロムウェル開放」: 最低5G保証、継続率約80〜95%。物差し補助値としてのみ保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時にはART抽選に影響する **低確 / 通常 / 高確** の3状態が存在。
- 天井は **ボーナス間1400G**。最大36Gの前兆を経て **継続率90%のART**へ突入する解析で一致。
- ART当選ではボーナス間天井カウンタはリセットされず、ボーナス成立まで進行する。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- HAZUSE当時解析で、通常時の低確/通常/高確について **設定変更時に内部状態移行抽選が行われる**ことを直接確認。
- 設定変更時の状態振り分けは設定別に公開されているため、朝一の状態再抽選は `RESET_AND_REROLL_CONFIRMED`。
- 一方、ボーナス間1400G天井カウンタについて「設定変更時に0へリセット」と直接明記した本機固有の現存本文は今回固定できず、一般則から補完しない。

### carryOverBehavior

- 据え置き時の **ボーナス間天井G数、内部状態**を設定変更時と直接比較した本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- ART当選ではボーナス間天井カウンタが継続することは確認できるが、これは据え置き/日跨ぎ契約の直接根拠にはしない。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ON時について、ボーナス間天井G、低確/通常/高確状態、ART前兆等を設定変更と比較した本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更: `UNVERIFIED_AFTER_RESEARCH`（本機固有の直接記述を今回固定できず）。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`。
- 電源OFF→ONのみ: `UNVERIFIED_AFTER_RESEARCH`。
- 通常運用中は **ART当選でボーナス間1400G天井カウンタはリセットされない**ことを複数解析で確認。

### ceilingAfterReset

- 通常天井: **ボーナス間1400G + 最大36G前兆**。
- 設定変更専用の天井短縮/変更値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時に通常天井カウンタがリセットされるか自体は上記のとおり `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset

- 規定Gモード/天国等のゲーム数解除モード機ではなく、resetBehaviorで比較すべき主要内部要素は低確/通常/高確の **状態**。
- 朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- **設定変更時に低確/通常/高確を再抽選**。
- 公開振り分け:

| 設定 | 低確 | 通常 | 高確 |
|---:|---:|---:|---:|
| 1 | 75.0% | 5.0% | 20.0% |
| 2 | 70.0% | 6.5% | 23.5% |
| 3 | 65.0% | 8.0% | 27.0% |
| 4 | 60.0% | 10.0% | 30.0% |
| 5 | 55.0% | 12.5% | 32.5% |
| 6 | 50.0% | 15.0% | 35.0% |

- HAZUSE当時解析による直接値。合計100%。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時は **高確スタート20.0〜35.0%**（設定1→6）を含む状態再抽選がある。
- これは朝一専用AT確定恩恵ではなく、ART当選率に影響する初期内部状態の優遇可能性として保持。
- 天井短縮、朝一ART確定/CZ確定などは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の明示的不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井Gリセット自体が直接確認できていないため、前日ハマリ消去を不利要素として断定しない。

### resetDetection

- 本機固有のリールガックン、初期出目、液晶ステージ、朝一前兆等による設定変更/据え置きの確定・濃厚判別は `UNVERIFIED_AFTER_RESEARCH`。
- K-Naviには2014-08-24の朝一挙動に関するユーザー質問が残るが、ユーザー投稿を解析契約には採用しない。

### numericResetData

- 設定変更時の内部状態振り分け: 上記 **低確/通常/高確 = 75/5/20%〜50/15/35%**。
- 設定変更専用短縮天井G: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定G以内ART当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の天井カウンタ処理: `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- 朝一に直接関係する公開値として、設定変更時の **高確選択率20.0 / 23.5 / 27.0 / 30.0 / 32.5 / 35.0%** を保持。
- 低確/通常も上記表のとおり。
- 朝一専用のAT当選率や短縮天井数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

- 表記揺れ: `パチスロ ヘルシング / ヘルシング / HELLSING / ヘルシングTH / 北電子`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源オフ / 天井 / 1400G / 宵越し / 内部状態 / 低確 / 通常 / 高確 / ガックン / 50枚 / 1000円 / ベース`。
- 資料系統: 北電子公式検定情報・公式ニュース、K-Navi、HAZUSE、パチマガスロマガ、P-WORLD、パチビー、パチトラ、パチセブン、2014年当時天井解析、後年DB。
- `ヴァン・ヘルシング`（藤商事）は別機種のため検索混入を除外。
- K-Naviには「設定変更後の挙動」専用ページの存在を確認したが、現存キャッシュから本文を安全に取得できなかったため、そのページ本文を根拠に具体契約を補完していない。

## sources

取得日: **2026-09-07**

1. 北電子公式 — 「ヘルシングTH」検定情報
   - https://www.kitadenshi.co.jp/slot-kentei/hellsing/
   - 型式名、各都道府県の検定公示情報
   - reliability: OFFICIAL
2. 北電子公式 — パチスロ最新情報（2014-06-24特設サイト公開）
   - https://www.kitadenshi.co.jp/funnews/slot/page/8/
   - reliability: OFFICIAL
3. パチマガスロマガ — パチスロ ヘルシング
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/92/a.php
   - 機種概要、ART純増、BIG/REG獲得枚数
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
4. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/92/h.php
   - BIG/REG/合算、ボーナス+ART合算、機械割。メーカー発表値表記
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
5. K-Navi — パチスロ ヘルシング
   - https://p-kn.com/slot/2099/
   - ホール導入開始2014-08-04、BIG約204枚、REG約48枚、ART30G+α・約1.4枚/G
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
6. HAZUSE — パチスロ ヘルシング
   - https://hazuse.com/machine/pachislot/3S1259/
   - 型式ヘルシングTH、検定3S1259、天井1400G、機械割、内部状態解析
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
7. HAZUSE — AT/ART・内部状態
   - https://hazuse.com/machine/pachislot/3S1259/genre/209/?hazu_scroll=genre_nav
   - 設定変更時の低確/通常/高確振り分け
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
8. P-WORLD — パチスロ ヘルシング
   - https://www.p-world.co.jp/machine/database/7461
   - 5号機ボーナス+ART、純増、基本構造
   - reliability: INDUSTRY_DATABASE
9. パチビー — パチスロ ヘルシング
   - https://www.pachibee.jp/machines/index/214070002
   - 導入2014-08-04、基本スペック
   - reliability: INDUSTRY_DATABASE
10. スロパチクエスト — ヘルシング 天井解析
   - https://www.slopachi-quest.com/article/hellsing/
   - ボーナス間1400G+前兆、ART当選では天井カウンタ非リセット
   - reliability: ANALYSIS_PERIOD_SOURCE
11. パチトラ — パチスロ ヘルシング
   - https://p-tora.com/i4124a4/
   - 導入開始2014-08-04、メーカー、獲得枚数
   - reliability: INDUSTRY_DATABASE

## missingFields

- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- standaloneArtInitialHitBySetting: `UNVERIFIED_AFTER_RESEARCH`（ボーナス+ART合算は取得済み）
- reset gameCounter settingChange/carryOver/powerCycle direct contract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- `NONE_CONFIRMED`。機械割・ボーナス確率・主要獲得枚数・純増は取得した主要資料間で一致。

## confidence

- identity: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- resetBehavior.settingChangeState: ANALYSIS_HIGH_PERIOD_SOURCE
- resetBehavior.gameCounter/carryOver/powerCycle/detection: UNVERIFIED_AFTER_RESEARCH
