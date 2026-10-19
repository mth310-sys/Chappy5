# No.1242 パチスロ チェインクロニクル

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ チェインクロニクル
- manufacturer: Sammy
- releaseDateCanonical: 2018-11-05
- generation: 6号機
- systemType: AT / CZ / 擬似ボーナス / AP周期管理
- formalModelName: `SチェインクロニクルWR`
- certificationNumber: `8S0469`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パチビー、HAZUSE、すろぱちくえすと、ちょんぼりすた等が2018-11-05導入で一致。
- 2018年11月の当時導入予定一覧でも11/5群として掲載。
- confidence: `ANALYSIS_HIGH_MULTIPLE_CROSSCHECKED_WITH_CONTEMPORARY_CALENDAR`。

## identificationEvidence
- HAZUSEは型式名 `SチェインクロニクルWR`、検定番号 `8S0469`、メーカーSammy、6号機ATを掲載。
- パチビーはSammyの6号機第1弾として本機を掲載。
- 同名ゲーム/IPと混同せず、2018年Sammy製パチスロに限定。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 101.4% |
| 4 | 104.6% |
| 5 | 107.2% |
| 6 | 110.1% |

- パチビー、HAZUSE、すろぱちくえすと、ちょんぼりすた等で一致。

### initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/354.9 |
| 2 | 1/342.1 |
| 3 | 1/313.0 |
| 4 | 1/281.8 |
| 5 | 1/263.2 |
| 6 | 1/249.4 |

- パチビー、HAZUSE、すろぱちくえすと等で一致。
- 義勇軍BONUS出現率は設定1 1/4817.68 ～ 設定6 1/1605.41（HAZUSE）。完全再現用の全抽選詳細は対象外。

### baseGamesPer50
- 全設定共通 **39.03G/50枚**。
- HAZUSE、一撃で一致。ちょんぼりすた等の約39G表記とも整合。
- confidence: `ANALYSIS_HIGH_MULTIPLE_CROSSCHECKED`。

### netIncrease
- AT / 擬似ボーナス純増: **約4.0枚/G**。
- パチビー、HAZUSE、ちょんぼりすた等で一致。

### basicPayout
- 擬似ボーナス「義勇軍BONUS」: **30G**。
- AT「チェインクロニクルチャプターズ」: 規定ゲーム数不定の継続型。
- CZ「義勇軍QUEST」: 平均約20G、初回突破期待度50%OVERの資料あり。

### ceiling
- 通常ゲーム数到達型の天井: `NONE_CONFIRMED_AS_CONVENTIONAL_GAME_COUNT_CEILING`。
- 本機固有の周期上限: **333AP**。
- 333AP到達で「宝箱CHANCE」へ移行し、最低でもCZ期待度約50%の「黒の軍勢襲来」へ進む。
- APは毎ゲーム1～50AP獲得する独自ポイントのため、333APを固定ゲーム数天井とは扱わない。

## modeSpecificMinimumData
- 通常時はAPシステムで毎ゲーム1～50APを獲得。
- 33 / 111 / 222 / 333AP到達時にCZ・ボーナス関連抽選。
- AP333到達またはCZ終了でAP周期がリセットされる公開解析あり。
- 主なCZは「義勇軍QUEST」、ATは「チェインクロニクルチャプターズ」。
- 完全再現用の小役別AP全振り分け・AT内部全抽選は収集対象外。

## resetBehavior
### settingChangeBehavior
- `CONFIRMED_PARTIAL`。
- 設定変更時は **APリセット / AP周期上限（天井扱い）リセット / 内部状態リセット**。
- 朝一の液晶AP表示は `???`。
- 液晶ステージは資料上「調査中」で、設定変更後の固定初期ステージは `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの後期更新済み解析をcanonical reset contractとし、一撃初期ページの「状態調査中」は情報更新段階差として保持。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 「据え置き」を純電源OFF→ONと独立条件として直接説明する本機固有資料は固定できず、両者を同義扱いしない。
- AP・内部状態の純電断引継ぎは別項目で確定。

### powerCycleBehavior
- `CONFIRMED_PARTIAL`。
- 純電源OFF→ONでは **APを内部的に引き継ぎ / AP周期上限も引き継ぎ / 内部状態を引き継ぎ**。
- 液晶上のAPは設定変更時と同じく `???` 表示となり、正確な内部APは直後には見えない。
- 液晶ステージは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_CONVENTIONAL_GAME_COUNT_COUNTER`。
- 代替管理値であるAPは設定変更でリセット、純電源OFF→ONで内部的に引き継ぐ。

### ceilingAfterReset
- `AP_CYCLE_RESTARTS_TO_NORMAL_333AP_MAX_ON_SETTING_CHANGE`。
- 設定変更専用の短縮AP上限は確認されず、通常と同じ最大333AP周期を新規開始する。
- 純電源OFF→ONでは残APを内部引継ぎ。

### modeAfterReset
- ゲーム数モードA/B等: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。
- AP周期は設定変更で初期化。
- 設定変更後の朝一専用モード分布: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: **内部状態リセット**。
- 純電源OFF→ON: **内部状態引継ぎ**。
- リセット後の具体的な状態振り分け率・名称別初期配分は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `APPLICABLE_6_0_AT_MACHINE_SPECIFIC_SECTION_LAMP_DETAIL_UNVERIFIED_AFTER_RESEARCH`。
- 本機は6号機ATだが、今回確認できた機種固有資料はAP・内部状態のリセット/引継ぎまで。設定変更/純電断時の有利区間ランプや区間開始契約を本機固有の直接資料で固定できないため、一般規則のみから補完しない。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の短縮AP天井、朝一AT/CZ当選率優遇、専用高確などの公開恩恵は確認できず。すろぱちくえすとはリセット恩恵を「調査中」と掲載。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `PARTIAL_CONFIRMED`。
- すろぱちくえすと、回顧攻略資料で **リールガックン判別が有効**との記載あり。
- ガックン発生率の公開数値は `UNVERIFIED_AFTER_RESEARCH`。
- 朝一AP `???` 表示は設定変更・純電断の双方で発生するため、それ単独では変更判別にならない。

### numericResetData
- conventionalNormalGameCeiling: `NOT_APPLICABLE`。
- normalApCycleMaximum: **333AP**。
- resetSpecificApMaximum: **333AP（短縮なし確認）**。
- powerCycleApBehavior: **内部引継ぎ / 表示???**。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`。

## conflictsAndQualityNotes
- 一撃の2018-11-14時点ページは設定変更/電源OFF→ON時の「状態」を調査中としている一方、後期更新されたちょんぼりすたは設定変更=内部状態リセット、電源OFF→ON=引継ぎと掲載。数値競合ではなく `SOURCE_UPDATE_MATURITY_DIFFERENCE_RESET_STATE` として履歴保持し、より情報が更新された後者をcanonicalに採用。
- HAZUSEは「天井機能非搭載」としつつAP333到達時の宝箱CHANCEを説明する。一般的な固定G数天井は非搭載、AP周期上限333は別契約として分離して保存。

## missingFields
- 据え置き時を純電断から分離した内部状態/AP契約。
- 設定変更/純電断時の本機固有の有利区間ランプ・区間開始処理。
- 設定変更後/純電断後の液晶ステージ確定契約。
- リセット後の内部状態分布率。
- ガックン発生率。
- 朝一専用当選率・リセット専用恩恵率。

## sources
取得日: 2026-09-10

1. パチビー「パチスロ チェインクロニクル」 — https://www.pachibee.jp/machines/index/218100000 — 2018-11-05、Sammy、6号機、AT約4.0枚/G、義勇軍BONUS30G、設定別機械割/AT初当たり — reliability: ANALYSIS_HIGH_DATABASE
2. HAZUSE「パチスロチェインクロニクル」 — https://hazuse.com/machine/pachislot/8S0469/ — 型式SチェインクロニクルWR、検定8S0469、2018-11-05、設定別機械割/AT初当たり、39.03G/50枚、AP333、朝一AP??? — reliability: ANALYSIS_HIGH_DATABASE
3. 一撃「パチスロチェインクロニクル 天井/設定変更」 — https://1geki.jp/slot/s_cc/3/ — AP333、設定変更/電源OFF→ON時のAP表示???、当時時点の状態/ステージ調査中 — reliability: OLD_ANALYSIS_HIGH
4. 一撃「パチスロチェインクロニクル 小役確率」 — https://1geki.jp/slot/s_cc/4/ — 全設定39.03G/50枚 — reliability: OLD_ANALYSIS_HIGH
5. ちょんぼりすた「チェインクロニクル」 — https://chonborista.com/slot/sammy-slot/65025/ — 設定変更時AP/内部状態リセット、純電源OFF→ON時AP内部引継ぎ/内部状態引継ぎ、朝一AP???、AP333 — reliability: ANALYSIS_HIGH_UPDATED
6. すろぱちくえすと「チェインクロニクル 解析」 — https://www.slopachi-quest.com/article/chainchronicle/ — 2018-11-05、設定変更ガックン判別有効、リセット恩恵調査中 — reliability: ANALYSIS_HIGH
7. すろぱちくえすと「チェインクロニクル 設定判別」 — https://www.slopachi-quest.com/article/chain-chronicle-settei/ — 設定別AT初当たり/機械割の別照合 — reliability: ANALYSIS_HIGH
8. すろぱちくえすと「2018年11月新台考察」 — https://www.slopachi-quest.com/article/2018-11-shindai/ — 11/5スロット4機（戦国乙女Type-A+、Sチェインクロニクル、らんま1/2、スーパープラネットSP）の当時一覧 — reliability: CONTEMPORARY_INDUSTRY_SECONDARY
