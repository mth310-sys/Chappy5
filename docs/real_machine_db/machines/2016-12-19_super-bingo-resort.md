machineName: スーパービンゴ リゾート
manufacturer: ベルコ
releaseDate: 2016-12-19
recordNumber: 1030
generation: 5号機 / 5.5号機期
systemType: A+ART / リアルボーナスCZ / セット継続型ART
formalModelName: スーパービンゴリゾート/R5
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CERTIFICATION_PENDING

## identity
- ベルコ公式は「スーパービンゴリゾート」を2016年12月登場の5号機ART機として掲載。
- K-Navi、ALL7、複数当時解析でホール導入開始/導入予定日 **2016-12-19** が一致。PiDEA Xは納品 **12/18〜** としており、実導入日との整合性がある。
- 中古実機資料で型式名 **スーパービンゴリゾート/R5** を確認。
- 検定番号は「スーパービンゴリゾート」「R5」「ベルコ」「6S」「検定番号」「検定通過」「公安委員会」等へ検索語を変更し、公式・業界・旧DB・撤去資料まで再探索したが、この実行では直接固定できず推測しない。
reliability: OFFICIAL_IDENTITY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE / FORMAL_MODEL_ANALYSIS_SINGLE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.5% |
| 6 | 111.0% |

- PiDEA X当時機械評価、ちょんぼりすた、2-9伝説で同系列を確認。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BINGO CHANCE（ART）初当たり |
|---:|---:|
| 1 | 1/394.2 |
| 2 | 1/366.5 |
| 3 | 1/344.4 |
| 4 | 1/311.4 |
| 5 | 1/277.6 |
| 6 | 1/254.8 |

- ベルコ公式掲載値をcanonicalとする。
- 当時業界/解析資料の **1/394 / 367 / 344 / 311 / 278 / 255** は同系列の丸め値。
- BINGO CHALLENGE（リアルボーナス）は **全設定共通 約1/200** と当時業界/解析資料で一致。
reliability: OFFICIAL

## baseGamesPer50
- canonical: **約39.5G/50枚**（当時解析）。
- PiDEA X当時試打/機械評価では **約40G/50枚**。
- 同一実質値の丸め差として併記し、平均化しない。
reliability: INDUSTRY_PLUS_ANALYSIS

## netIncrease
- ART「BINGO CHANCE」: **約2.0枚/G**。
- ベルコ公式・PiDEA X・P-WORLD・K-Naviで一致。
reliability: OFFICIAL_PLUS_INDUSTRY_HIGH

## basicPayout
- BINGO CHALLENGE（リアルボーナス）: **66枚**、11G。
- ART「BINGO CHANCE」: **1セット33G以上**。基本33G、Hooah!発生時は3桁以上のゲーム数。
- ART継続率は最大約91%と解析資料に掲載。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時の長期ゲーム数/周期天井は **非搭載**。
- 通常内部状態は **低確 / 高確** の2状態。レア役等でART直撃抽選率が変化。
- 本DBでは通常時の全小役別状態移行率・ART抽選率は完全再現用のため収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_GACKUN_AND_HIGH_DURATION
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **設定変更後は高確スタート**と複数解析資料に掲載。
- **RT状態は引継ぎ**とする朝一比較表あり。
- ステージは **バカラビーチ**、液晶出目は **865**。
- ゲーム数天井自体が存在しないため、天井リセット/短縮という概念は非該当。

### carryOverBehavior
- 据え置きでは内部状態を保持する扱い。純電源OFF→ONの公開比較表で内部状態・RT状態とも引継ぎとされる。
- ステージ/液晶初期表示だけでは設定変更と据え置きを区別できない。

### powerCycleBehavior
- **純電源OFF→ONでは内部状態を引き継ぐ**。
- **RT状態も引き継ぐ**。
- 表示上はバカラビーチ / 液晶出目865。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- 本機は通常時ゲーム数天井非搭載。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用の短縮天井は存在しない。

### modeAfterReset
- 通常時は低確/高確の状態管理で、設定変更後は**高確スタート**。
- 朝一専用の長期モード/ゲーム数モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: **HIGH_START**。
- 据え置き/純電源OFF→ON: **CARRYOVER**。
- 設定変更後の高確保証ゲーム数/継続ゲーム数の直接公開値は検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- **設定変更後の高確スタート**が主要朝一恩恵。
- 高確中は低確時よりART直撃当選率が大きく上昇する解析が公開されており、朝一客行動に影響し得る。

### resetPenalties
- ゲーム数天井/周期の宵越し価値は元々存在しないため、設定変更による天井消去不利はなし。
- 前日の高確状態を据え置きなら保持し得る一方、設定変更では高確スタートになるため、公開範囲で明確なリセット不利は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ステージ **バカラビーチ**、液晶出目 **865** は設定変更/純電源OFF→ON双方で同一とされ、単独の変更判別には使えない。
- 本機固有のガックン契約は「スーパービンゴリゾート/R5」「設定変更」「朝一」「据え置き」「ガックン」等へ再探索したが直接根拠を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 高確挙動は設定変更推測材料になり得るが、通常遊技中にも高確移行があるため単独確定判別とはしない。

### numericResetData
- 設定変更後内部状態: **高確スタート**（公開資料は状態を明記するが保証G数/高確継続G数は未確認）。
- 朝一ステージ: **バカラビーチ**。
- 朝一液晶出目: **865**。
- 純電源OFF→ON: **内部状態/RT状態引継ぎ**。
- 設定変更専用天井: `NOT_APPLICABLE_NO_CEILING`。
- 設定変更時の長期モード振り分け/特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- 導入日・メーカー・世代/タイプはベルコ公式、ALL7、K-Navi、PiDEA Xで高整合。
- ART初当たりはベルコ公式の精密値をcanonical、当時資料の整数丸め値を照合に利用。
- 機械割は当時業界資料と複数解析で一致。
- ベース39.5Gと40Gは同一値の丸め差と判断し両方保持。
- 朝一高確スタート、純電断時の内部状態引継ぎ、RT引継ぎ、ステージ/液晶出目は複数解析系統で一致。
- 検定番号と高確保証G数、ガックンの直接契約は十分な再探索後も固定できずUNVERIFIED/NONE_CONFIRMED扱い。

## conflicts
- `ROUNDING_BASE_GAMES_PER_50_39_5_VS_APPROX_40`: 解析39.5G、当時業界資料約40G。実質丸め差として保持。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更後高確の保証/継続ゲーム数: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. ベルコ公式 — スーパービンゴリゾート
   - https://www.s-bellco.co.jp/products/slot/suberbingo_resort/
2. ベルコ公式 — 会社情報 / BINGOシリーズ沿革
   - https://www.s-bellco.co.jp/company/
3. PiDEA X — 継承と進化の「スーパービンゴリゾート」を発表／ベルコ（2016-10-19）
   - https://www.pidea.jp/articles/%E7%B6%99%E6%89%BF%E3%81%A8%E9%80%B2%E5%8C%96%E3%81%AE%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
4. PiDEA X — 三木流、「スーパービンゴ」の評価は？（2016-11-04）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
5. K-Navi — スーパービンゴ リゾート
   - https://p-kn.com/slot/2647/
6. P-WORLD — スーパービンゴリゾート
   - https://www.p-world.co.jp/machine/database/8201
7. ちょんぼりすた — スーパービンゴリゾート 解析まとめ
   - https://chonborista.com/slot/belko-slot/27546/
8. 期待値見える化 — スーパービンゴリゾート 天井・朝一リセット
   - https://slotjin.com/slot/superbingoresort/
9. 一撃 — ART概要 / ART直撃 / 内部状態
   - https://1geki.jp/slot/s_sbingoresort/81/
   - https://1geki.jp/slot/s_sbingoresort/43/
   - https://1geki.jp/slot/s_sbingoresort/86/
10. 2-9伝説 — スーパービンゴリゾート
   - https://29den.com/superbingoresort/
11. 中古実機 中一商事 — 型式名 スーパービンゴリゾート/R5
   - https://item.rakuten.co.jp/auc-nakaiti/bikori/
12. ALL7 — 2016年12月導入予定一覧
   - https://www.all7.jp/plans/index/2016/12
