# No.1239 スーパープラネットSP

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: スーパープラネットSP
- manufacturer: 山佐
- releaseDateCanonical: 2018-11-05
- generation: 5.9号機
- systemType: ノーマル / Aタイプ / リアルボーナス主体
- formalModelName: `スーパープラネットSP/CC`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- K-Navi、すろぱちくえすと、ちょんぼりすた、当時解析が2018-11-05導入で一致。
- Amusement Japanは2018-08-29から全国拠点で展示会開催と報道し、山佐の新機種であることを当時業界資料から照合。
- confidence: `INDUSTRY_CONTEMPORARY_PLUS_MULTIPLE_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- メーカー: 山佐。
- 型式名 `スーパープラネットSP/CC` は複数中古実機DB・ホール導入記録・当時解析で一致。
- 検定番号は機種名/型式/山佐/検定番号/公安委員会等へ検索語を変えて再探索したが、今回高信頼で直接固定できず推測しない。

## performanceCore
### payoutRateBySetting
通常攻略 / フル攻略を定義分離して保持。

| 設定 | 通常攻略 | フル攻略 |
|---:|---:|---:|
| 1 | 96.4% | 98.0% |
| 2 | 97.6% | 99.3% |
| 3 | 99.1% | 100.9% |
| 4 | 101.3% | 103.2% |
| 5 | 103.3% | 105.3% |
| 6 | 106.8% | 109.1% |

- ちょんぼりすた、すろぱちくえすと、当時解析で一致。

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/295.2 | 1/334.3 | 1/156.7 |
| 2 | 1/292.5 | 1/324.4 | 1/153.8 |
| 3 | 1/287.4 | 1/313.5 | 1/149.9 |
| 4 | 1/284.9 | 1/295.2 | 1/144.9 |
| 5 | 1/278.8 | 1/278.8 | 1/139.4 |
| 6 | 1/271.9 | 1/241.8 | 1/128.0 |

- P-WORLD、すろぱちくえすと、ちょんぼりすた、当時解析で一致。

### baseGamesPer50
- 約36〜38G/50枚。
- 複数解析資料で一致。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART/RTによる継続純増を物差し値として持つ機種ではない。

### basicPayout
- SUPER BONUS: 約300枚。
- REGULAR BONUS: 約108枚を複数DBで確認。
- 別当時解析にREG `最大100枚` 表記があり、定義/表記差としてCONFLICT保持。

### ceiling
- 天井: `NONE / NOT_EQUIPPED`。

## modeSpecificMinimumData
- ボーナス成立をリーチ目/入り目で察知するノーマルタイプ。
- 出目モード / ボタンモード / 出目モード・極の3演出モードを搭載。
- 通常時・ボーナス中のサウンドモード選択機能あり。
- 出玉性能の物差しに不要な詳細小役・入り目抽選は収集しない。

## resetBehavior
### settingChangeBehavior
- `NO_RESET_BENEFIT_CONFIRMED / USER_SELECTABLE_DISPLAY_SOUND_MODES_RESET`。
- 当時解析は「朝一の恩恵などは特に存在しない」と明記。
- 設定変更の有無を問わず告知モード/サウンドはリセットされるため、見た目の選択状態では設定変更判別不可。
- ノーマル機で天井/通常モード/有利区間に依存する初当たり構造はない。

### carryOverBehavior
- `NO_CEILING_OR_GAME_COUNT_CARRYOVER_RELEVANCE`。
- 据え置きを純電断から独立条件として全内部状態まで列挙した本機固有公開資料は確認できず、`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 告知モード/サウンド選択状態は設定変更の有無を問わず朝一リセットされるため据え置き判別には使えない。

### powerCycleBehavior
- `USER_SELECTABLE_DISPLAY_SOUND_MODES_RESET_CONFIRMED / OTHER_INTERNAL_CONTRACT_UNVERIFIED_AFTER_RESEARCH`。
- 「設定変更の有無を問わず」告知モード/サウンドがリセットされることは確認。
- 純電源OFF→ONだけを独立表にした内部状態/成立役保持等の公開契約は、機種名・型式・メーカー・電源OFF ON・据え置き等で再探索しても高信頼固定できず推測しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_COUNTER`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- 朝一専用の内部モード/リセットモード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 遊技者選択の告知/サウンドモードは朝一リセット。

### stateAfterReset
- 出玉に関わる朝一専用内部高確/状態: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立状態など完全再現用の細かな電断契約は `UNVERIFIED_AFTER_RESEARCH / OUTSIDE_YARDSTICK_SCOPE_UNLESS_DIRECTLY_PUBLISHED`。

### advantageousSectionReset
- `N/A_NOT_APPLICABLE_NORMAL_TYPE`。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 短縮天井・朝一初当たり優遇・専用高確等は確認できない。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `DISPLAY_SOUND_MODE_NOT_USABLE_FOR_SETTING_CHANGE_DETECTION`。
- 設定変更の有無を問わず告知モード/サウンドがリセットされるため、この見た目では設定変更/据え置きを判別できない。
- 本機固有のリールガックン発生条件/発生率は「スーパープラネットSP/スープラSP/型式CC/山佐 + 設定変更/リセット/朝一/据え置き/ガックン」で再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- normalCeiling: `NONE`。
- resetSpecificCeiling: `NOT_APPLICABLE`。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- REG獲得枚数: P-WORLD/すろぱちくえすと/パチマガスロマガ系は約108枚、別当時解析は最大100枚。平均せず `CONFLICT_REG_PAYOUT_APPROX_108_VS_MAX_100` として双方保持。
- 機械割は通常攻略値とフル攻略値が別定義であり競合ではない。レンジ化せず別列保持。

## missingFields
- 検定番号。
- 据え置きと純電断を独立条件として列挙した全内部状態契約。
- 本機固有リールガックン条件/発生率。

## sources
取得日: 2026-09-10

1. Amusement Japan「“スープラ”伝統の入り目が復活」 — https://amusement-japan.co.jp/article/detail/10000788/
   - 2018-08-30掲載。山佐、展示会、ノーマルタイプ、1300以上のチャンスパターン等。
   - reliability: INDUSTRY_CONTEMPORARY
2. P-WORLD スーパープラネットSP — https://www.p-world.co.jp/machine/database/8748
   - 山佐、ノーマルタイプ、BIG約300枚/REG約108枚、設定別BIG/REG。
   - reliability: INDUSTRY_DATABASE
3. すろぱちくえすと — https://www.slopachi-quest.com/article/super-planet-sp/
   - 2018-11-05、5.9号機ノーマル、36〜38G/50枚、約300/108枚、設定別確率・通常/完全攻略機械割、天井なし。
   - reliability: ANALYSIS_HIGH
4. ちょんぼりすた — https://chonborista.com/slot/yamasa-slot/64533/
   - 2018-11-05、36〜38G/50枚、天井なし、設定別BIG/REG/合算/機械割。朝一恩恵なし、設定変更有無を問わず告知モード/サウンドリセットで見た目判別不可。
   - reliability: ANALYSIS_HIGH
5. 元プロMGのパチスロブログ — https://www.pachislotblog.tokyo/super-planett-sp-analysis/
   - 2018-11-05、36〜38G/50枚、設定別BIG/REG/合算、通常/フル攻略機械割。BIG最大300枚/REG最大100枚。
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
6. K-Navi — https://p-kn.com/slot/3092/
   - 2018-11-05ホール導入、ノーマルタイプ。
   - reliability: ANALYSIS_HIGH
7. 中一商事 実機DB — https://item.rakuten.co.jp/auc-nakaiti/purasp/
   - 型式名 `スーパープラネットSP/CC`、5号機ノーマルA、BIG約300枚/REG約108枚。
   - reliability: SECONDARY_MACHINE_DATABASE
8. すろぱちくえすと 2018導入一覧 — https://www.slopachi-quest.com/article/sindai-2018/
   - 10/22の次の掲載群を11/5とし、らんま1/2、チェインクロニクル、スーパープラネットSP、戦国乙女Type-A+を掲載。
   - reliability: ANALYSIS_HIGH_LIST
9. パチスロ立ち回り講座 新台導入予定日 — https://crankyseven.com/newmachine-info.htm
   - 2018-10-22デュエルドラゴンプラスの次を2018-11-05の4機として掲載。
   - reliability: SECONDARY_HISTORICAL_LIST
