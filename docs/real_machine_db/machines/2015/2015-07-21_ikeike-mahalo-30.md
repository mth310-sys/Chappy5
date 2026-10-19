# イケイケマハロ-30

machineName: イケイケマハロ-30
manufacturer: 北電子
releaseDate: 2015-07-21
releaseDatePrecision: exact_nationwide_hall_start
releaseDateNote: K-Naviの2015年7月全国一斉導入カレンダーおよび機種ページが2015-07-21で一致。地域先行導入を示す店舗ブログも存在するため、地域先行と全国一斉導入開始を分離し、本DB canonical は2015-07-21。
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ沖スロ
formalModelName: イケイケマハロKD-30
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_PUBLIC_DATA

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.4% |
| 3 | 100.6% |
| 4 | 103.1% |
| 5 | 106.1% |
| 6 | 110.5% |

- 北電子公式製品ページの工場データ予測値。P-WORLD、パチマガスロマガでも同値。
- confidence: OFFICIAL_MULTI_SOURCE_CONFIRMED

## initialHitBySetting

ノーマル機の主要比較値としてBIG / REG / 合算を保持。

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/294 | 1/512 | 1/187 |
| 2 | 1/291 | 1/475 | 1/181 |
| 3 | 1/279 | 1/437 | 1/170 |
| 4 | 1/266 | 1/400 | 1/160 |
| 5 | 1/251 | 1/370 | 1/150 |
| 6 | 1/230 | 1/338 | 1/137 |

- 北電子公式、P-WORLD、パチマガスロマガ、K-Naviで一致。
- confidence: OFFICIAL_MULTI_SOURCE_CONFIRMED

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- 「イケイケマハロ-30 / イケイケマハロ / イケイケマハロKD-30」×「50枚 / 1000円 / 千円 / ベース / コイン持ち」を変更し、北電子公式、P-WORLD、K-Navi、パチマガスロマガ、当時攻略、旧DB・中古実機資料まで横断したが、比較可能な明示G数を安全に固定できず。
- 小役確率からの推定計算は行わない。

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART非搭載。

## basicPayout

- BIG CHANCE: **最大312枚**。
- BONUS GAME (REG): **最大130枚**。
- 北電子公式アプリ説明、P-WORLD、当時ホール資料で照合。
- confidence: OFFICIAL_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ。
- AT/ART/CZの内部モード・規定ゲーム数天井は非搭載。
- ちょんぼりすたは「天井やゾーンなどは存在せず」と明記。
- BIG後77G以内に成立したBIGではプレミアムBGM条件あり。ただしこれは当選保証・天井・朝一専用モードではない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_RESET_ITEMS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機はノーマルタイプで、AT/ART/CZ・規定ゲーム数天井・内部モードを搭載しないため、それらの設定変更リセットは `NOT_APPLICABLE`。
- 設定変更時固有のボーナス後77GプレミアムBGMカウンタ、告知モード表示、その他内部保持情報の初期化契約は、本機固有資料を再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な北電子/ジャグラー系挙動から補完しない。

### carryOverBehavior

- 天井・AT/ART/CZモードの宵越しは `NOT_APPLICABLE`。
- 前日BIG後77G条件、選択告知モード等が据え置きでどこまで保持されるかは、本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ONについて、前日BIG後77G条件・選択告知モード・リール初期挙動の機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと純電断を自動的に同義扱いしない。

### gameCounterReset

- ボーナス/AT/ART/CZ間の救済天井ゲーム数: `NOT_APPLICABLE_NO_CEILING`。
- BIG後77G以内プレミアムBGM条件の設定変更・据え置き・純電断時カウンタ扱いは `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。
- リセット短縮天井なし。

### modeAfterReset

- AT/ART/CZ用の内部モード: `NOT_APPLICABLE_NORMAL_TYPE`。
- 「ナルかも / ナルなる / し～ん」は告知音選択モードであり、朝一当選率を左右す内部モードとは分離する。
- 設定変更後の告知音選択モード初期値/保持は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 高確/低確等のAT/ART抽選状態: `NOT_APPLICABLE_NORMAL_TYPE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更による短縮天井、朝一高確保証、専用モード優遇などの本機固有恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更で失われる天井進捗: `NOT_APPLICABLE_NO_CEILING`。
- BIG後77GプレミアムBGM条件の消失有無は `UNVERIFIED_AFTER_RESEARCH` のため不利要素として断定しない。

### resetDetection

- 本機固有の確定的なガックン、初期出目、ランプ、朝一表示による設定変更/据え置き判別契約は、機種名・型式名・メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リールガックン / 77G / BGM」を組み替えた再探索後も主要根拠を固定できず、`NONE_CONFIRMED_AFTER_RESEARCH`。
- 他のジャグラー/マハロ系機種のガックン挙動を流用しない。

### numericResetData

- 設定変更時モード振り分け、朝一特定G以内当選率、リセット恩恵発生率、短縮天井: `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- `NONE_MATERIAL_CONFIRMED`。
- 北電子公式・P-WORLD・パチマガスロマガの設定別性能値は一致。
- K-Naviの導入日2015-07-21と地域先行導入を示す店舗資料はイベント定義/地域差なので数値競合として平均しない。

## missingFields

- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`（正式型式名は確認済み）。
- 設定変更/据え置き/純電断時のBIG後77GプレミアムBGM条件保持契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の朝一変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. 北電子公式「イケイケマハロ-30」 — https://www.kitadenshi.co.jp/slot/ikeikemahalo-30/
   - メーカー、シリーズ、設定別BB/RB/合算/出玉率。工場データから算出した予測値と明記。
   - confidence: OFFICIAL
2. 北電子公式アプリ — https://www.kitadenshi.co.jp/fun/apps/ikm30/
   - 実機ルール、最大312枚BIG。
   - confidence: OFFICIAL
3. K-Navi「イケイケマハロ-30」 — https://p-kn.com/slot/2290/
   - ホール導入開始2015-07-21、設定別ボーナス確率。
   - confidence: ANALYSIS_HIGH
4. K-Navi 2015年7月導入カレンダー — https://p-kn.com/calendar/201507/
   - 全国一斉導入開始日として2015-07-21掲載。
   - confidence: INDUSTRY_DB
5. P-WORLD — https://www.p-world.co.jp/machine/database/7752
   - 5号機ノーマル完全告知沖スロ、設定別性能、BIG最大312枚/REG最大130枚、BIG後77G以内BIGのプレミアムBGM条件。
   - confidence: INDUSTRY_DB/ANALYSIS_HIGH
6. パチマガスロマガ「ボーナス確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/97/h.php
   - メーカー発表値として設定別BIG/REG/合算/PAYOUT。
   - confidence: ANALYSIS_HIGH
7. パチマガスロマガ「機種概要」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/97/a.php
   - ノーマル/完全告知/マハロシリーズ。
   - confidence: ANALYSIS_HIGH
8. ちょんぼりすた — https://chonborista.com/slot/kitadenshi/10461/
   - 天井・ゾーン非搭載、2015年7月導入。
   - confidence: ANALYSIS_SINGLE
9. P-MEDIA 検定通過記事（2015-05-27） — https://p-media.info/3%E4%BD%9C%E7%9B%AE%E3%81%AE%E3%83%9E%E3%83%8F%E3%83%AD%E3%81%AF%E3%80%8C%E3%82%A4%E3%82%B1%E3%82%A4%E3%82%B1%E3%80%8D%E3%81%A7%EF%BC%8F%E3%82%A4%E3%82%B1%E3%82%A4%E3%82%B1%E3%83%9E%E3%83%8F%E3%83%AD/
   - 型式名イケイケマハロKD-30、北電子、30Φ。
   - confidence: INDUSTRY
10. pachinko’s blog 北電子アーカイブ — https://pachinko.hatenablog.jp/archive/category/%E5%8C%97%E9%9B%BB%E5%AD%90?orderBy=popular&page=2
   - 型式名イケイケマハロKD-30、2015年7月リリース。
   - confidence: RETROSPECTIVE_DB
