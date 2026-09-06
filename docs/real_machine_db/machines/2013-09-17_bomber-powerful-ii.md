# パチスロ ボンバーパワフルII

machineName: パチスロ ボンバーパワフルII
manufacturer: SANKYO
releaseDate: 2013-09-17
releaseDatePrecision: exact_day__knavi__pachibee__hisshobon
releaseDateStatus: VERIFIED_EXACT_DAY_MULTI_SOURCE

generation: 5号機
systemType: ART / 擬似ボーナス / ゲーム数管理・上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL_AND_SPEC_CONFLICT

## identity

- SANKYOの5号機「パチスロ ボンバーパワフルII」。型式名は公式SANKYOオンライン博物館で **ボンバーパワフルIIＺ**。
- K-Navi、パチビー、必勝本がホール導入日 **2013-09-17** で一致。SANKYO公式博物館は導入年月 **2013.09**。
- confidence: OFFICIAL_IDENTITY + INDUSTRY_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.8% |
| 2 | 98.9% |
| 3 | 100.7% |
| 4 | 102.9% |
| 5 | 107.0% |
| 6 | 111.0% |

- 必勝本・パチマガスロマガ系・PACNKで一致する解析値を性能比較の主系列として採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似BIG合算

| 設定 | BIG |
|---|---:|
| 1 | 1/263.9 |
| 2 | 1/254.6 |
| 3 | 1/240.2 |
| 4 | 1/224.4 |
| 5 | 1/196.6 |
| 6 | 1/172.6 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/478.2 |
| 2 | 1/461.3 |
| 3 | 1/435.1 |
| 4 | 1/406.3 |
| 5 | 1/355.9 |
| 6 | 1/312.4 |

### ボーナス合成

| 設定 | 合成 |
|---|---:|
| 1 | 1/170.0 |
| 2 | 1/164.1 |
| 3 | 1/154.8 |
| 4 | 1/144.5 |
| 5 | 1/126.6 |
| 6 | 1/111.2 |

- 必勝本とパチマガスロマガ系で一致。
- SANKYO公式博物館の「BB/RB/ボーナス合成」掲載値は上記解析値と異なるため、下記 conflicts に分離保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31.0G / 1000円**。
- パチマガスロマガ系小役確率ページに直接掲載。
- confidence: ANALYSIS_HIGH_SINGLE_DIRECT

## netIncrease

- BIG前半「ボンバーゲーム」および後半ART「パワフルゲーム」: **純増約2.4枚/G**。
- パワフルゲーム初期ゲーム数: **30 / 50 / 100G**。ボンバーゲームで得た上乗せ分を加算。
- P-WORLD、K-Navi、パチビー、パチマガスロマガ系で照合。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE + ANALYSIS_HIGH

## basicPayout

- BIG: 前半「ボンバーゲーム」= **ベルナビ5～66回**、後半「パワフルゲーム」=初期30/50/100G+上乗せ。
- 両BIGは当選時点でART突入確定。
- REGからBIG昇格・1G連抽選あり。
- プレミアムBIGは擬似ボーナス1G連+継続率80%のビッグバンスパークが確定するとのP-WORLD記載あり。
- confidence: INDUSTRY_DATABASE_HIGH + ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除・レア役直撃・CZ「ボンバーチャレンジ」から擬似ボーナスを目指す。
- 通常時内部モードとして **通常A / 通常B / 自力 / 天国 / ボンバー** の5系統を確認。
- PACNKでは通常A最大960G、通常B最大1152Gと掲載。パチマガスロマガ系では本機の最大天井を **1152G** と直接掲載。
- 天国/ボンバーモードは早いゲーム数での当選に期待できる。

## ceiling

- **最大1152G**。規定ゲーム数消化でボーナスへ。
- 通常A: 最大960G、通常B: 最大1152Gという解析資料あり。
- confidence: ANALYSIS_HIGH_FOR_MAX_1152__SECONDARY_SUPPORT_FOR_MODE_SPECIFIC_960_1152

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DEDICATED_RESET_PAGES_AND_CONTEMPORARY_REFERENCES_FOUND__SPECIFIC_CONTRACT_NOT_SAFELY_RECOVERED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 必勝本に本機固有の「天井&設定変更」、パチマガスロマガ系に「朝イチ・設定変更」専用項目が存在することを確認。
- 当時攻略番組「パチスロ最強伝説G #574」の紹介文にも「設定変更が確認できる有力な情報」を扱う旨が残る。
- ただし現存取得本文・検索キャッシュから、天井G CLEAR、モード再抽選、状態初期化などの具体契約を安全に回収できなかったため一般論で補完しない。

### carryOverBehavior

- 純据え置き時の規定G進捗、モード、BC内部状態等の保持契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** の規定G進捗、モード、状態、液晶ステージ: **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- setting change: **UNVERIFIED_AFTER_RESEARCH**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井: **1152G**。
- 設定変更専用の短縮天井・固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更で前日規定Gを消去するかは直接本文を回収できず推定しない。

### modeAfterReset

- 通常A / 通常B / 自力 / 天国 / ボンバーの存在は確認。
- 設定変更時のモード再抽選契約および具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 通常時にBC当選へ影響する内部状態移行解析が存在することは確認。
- 設定変更・据え置き・純電断時の状態初期化/引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、確定CZ/ART、数値付きモード優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日天井進捗消去等の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**（具体契約未回収のため断定しない）。

### resetDetection

- 本機固有の設定変更判別情報が当時攻略番組で扱われたことは確認。
- K-Navi利用者ログには朝一「夢夢ステージ」を据え置き否定候補として見る記述があるが、ユーザーログ単独なので採用しない。
- ガックン、初期出目、液晶ステージ、ランプ等の確定条件: **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード振り分け、朝一特定G以内当選率、短縮天井G数、リセット恩恵発生率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- **CONFLICT_OFFICIAL_SPEC_VS_ANALYSIS_VALUES**: SANKYO公式博物館はBB 1/274.6～1/179.9、RB 1/466.4～1/305.1、合成1/172.9～1/113.2を掲載。一方、必勝本・パチマガスロマガ系・P-WORLD・PACNKはBIG 1/263.9～1/172.6、REG 1/478.2～1/312.4（分析表示の丸め差あり）で一致。定義差の可能性があるため平均せず両系列を保持し、性能比較主系列は解析3系統一致値を採用。
- 2019年「ボンバーパワフルIII」の設定変更/電源OFF→ON仕様は別機種なので転用しない。
- 2004年4号機「ボンバーパワフル」の仕様も転用しない。
- K-Naviの利用者ログは変更判別の補助探索には用いたが、確定資料としては採用しない。

## sources

取得日: **2026-09-06**

1. SANKYOオンライン博物館「パチスロ ボンバーパワフルII」
   - https://www.sankyo-fever.jp/collection/546/
   - 公式製品同定、導入年月2013.09、型式ボンバーパワフルIIＺ、公式掲載BB/RB/合成値。
   - confidence: OFFICIAL

2. K-Navi「パチスロ ボンバーパワフルII」
   - https://p-kn.com/slot/1911/
   - 導入開始2013-09-17、擬似ボーナス/ART構造、BIG前半5～66ナビ、PG初期30/50/100G。
   - confidence: INDUSTRY_DATABASE_HIGH

3. パチビー「ボンバーパワフルⅡ」
   - https://www.pachibee.jp/movies/index/9832
   - 導入日2013-09-17、5号機ART、BR非搭載、約2.4枚/G、CZ・天井あり。
   - confidence: INDUSTRY_DATABASE_HIGH

4. パチ＆スロ必勝本「基本スペック」
   - https://p.hisshobon.jp/machine/2265/1/41459
   - 導入2013-09-17、BIG/REG/合成、機械割97.8～111.0%、専用「天井&設定変更」ページの存在。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ系「ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/h.php
   - BIG/REG/合成、PAYOUT 97.8～111.0%。
   - confidence: ANALYSIS_HIGH

6. パチマガスロマガ系「小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/c.php
   - 1000円あたり約31.0G。
   - confidence: ANALYSIS_HIGH

7. パチマガスロマガ系「ART突入フロー」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/l.php
   - 最大天井1152G、ART純増約2.4枚/G、天国/ボンバーモード等。
   - confidence: ANALYSIS_HIGH

8. パチマガスロマガ系 機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/sankyo_slot_32.php
   - 「通常時のモード移行」「解除ゲーム数振り分け」「天井・ヤメ時」「朝イチ・設定変更」専用項目の存在。
   - confidence: ANALYSIS_HIGH_INDEX_ONLY_FOR_UNRECOVERED_RESET_PAGE

9. P-WORLD「ボンバーパワフルII」
   - https://www.p-world.co.jp/machine/database/7154
   - ART 30/50/100G、約2.4枚/G、BIG/REG値、擬似ボーナス構造を照合。
   - confidence: INDUSTRY_DATABASE_HIGH

10. PACNK「ボンバーパワフルII」
   - https://pacnk.com/slot/2013/bomberpowerful2/top.php
   - 機械割97.8～111.0%、通常A/B等5モード、通常A最大960G・通常B最大1152G。
   - confidence: SECONDARY_ANALYSIS_MEDIUM_HIGH

11. ビデオマーケット「パチスロ最強伝説G #574 ボンバーパワフルⅡ」
   - https://www.videomarket.jp/title/082220/A082220042999H01
   - 当時攻略番組が本機の「設定変更が確認できる有力な情報」を扱ったことを確認。ただし具体条件は紹介文に残らず、推定しない。
   - confidence: CONTEMPORARY_PROGRAM_METADATA_MEDIUM
