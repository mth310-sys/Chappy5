# キングパルサー～DOT PULSAR～

machineName: キングパルサー～DOT PULSAR～
manufacturer: 山佐
releaseDate: 2016-04-04
recordNumber: 969
generation: 5号機
systemType: AT / 疑似ボーナス / ゲーム数モード+シークレットストック
formalModelName: ドットパルサーKPV／CC
certificationNumber: 5S1153
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSE当時機種DBで **山佐 / 型式 ドットパルサーKPV／CC / 検定番号5S1153 / 導入開始日2016-04-04** を確認。
- K-Navi、パチ＆スロ必勝本もホール導入開始2016-04-04で一致。
- グリーンべると2016-02-16業界記事は「納品は4月3日開始予定」としており、納品予定とホール導入日を分離した。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 109.0% |
| 6 | 115.0% |

- パチ＆スロ必勝本、ちょんぼりすた、複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
ボーナス初当たり:
| 設定 | 初当たり |
|---:|---:|
| 1 | 1/387.7 |
| 2 | 1/381.0 |
| 3 | 1/358.4 |
| 4 | 1/324.9 |
| 5 | 1/295.3 |
| 6 | 1/268.8 |

- HAZUSE、パチ＆スロ必勝本、複数解析で一致。
- 連チャン込みBR出現率は別定義のため主要初当たりと混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約45.4G/50枚**。
- ちょんぼりすた解析本文の精密値45.4Gを採用。P-Summa等の「約45G」は丸め一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 疑似ボーナスAT純増: **約2.9枚/G**。
- グリーンべると当時業界記事、ちょんぼりすた等で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: **平均約185枚**。30G消化またはJAC IN3回で終了。
- REG: **平均約63枚**。ベルナビ16回で終了。
- 当時業界記事と複数解析で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はゲーム数モードとシークレットストックを併用。
- 最大天井: **1280G**（通常A / 通常B / 高ストック）。到達で疑似ボーナス。
- 天国 / 超天国 / 保証は最大32G、引き戻し / リセットは最大512G。
- リセットモードは設定変更時のみ移行可能で、最大512Gかつ次回通常B以上が確定する公開解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数を再抽選**。
- 内部モードは再抽選され、設定1～4はリセット25.0% / 通常A37.5% / 通常B37.5%、設定5はリセット29.7% / 通常A32.8% / 通常B37.5%、設定6はリセット34.4% / 通常A28.1% / 通常B37.5%。
- 内部ボーナスストックは **リセット**。
- ちょんぼりすた、期待値見える化、すろぱちくえすとで整合。

### carryOverBehavior
- 据え置きは設定変更を伴わないため、当時朝一比較資料の電源OFF→ON欄と整合する範囲で **天井ゲーム数・内部モード・内部ストックをCARRYOVER_SUPPORTED** とする。
- 「据え置き」単独表よりも純電源OFF→ONの直接比較が明確なため、その根拠を主とする。
reliability: ANALYSIS_HIGH_DIRECT_POWER_CYCLE_TABLE

### powerCycleBehavior
純電源OFF→ONのみ:
- 天井ゲーム数: **CARRYOVER**。
- 内部モード: **CARRYOVER**。
- 内部ストック数: **CARRYOVER**。
- 期待値見える化、ちょんぼりすた、後年整理資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### gameCounterReset
- 設定変更: **RESET / CEILING_RESELECTED**。
- 据え置き: **CARRYOVER_SUPPORTED**。
- 純電源OFF→ON: **CARRYOVER**。
- 通常A/B/高ストックの通常最大天井は1280G。リセットモード選択時は最大512G。

### ceilingAfterReset
- 設定変更時は25.0～34.4%でリセットモードへ移行し、その場合の最大天井は **512G**。
- リセットモード天井振り分け: **128G 25.0% / 256G 25.0% / 512G 50.0%**。
- 設定変更後に通常A/Bが選ばれた場合は通常モード側の天井振り分けに従うため、「設定変更＝必ず512G天井」ではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### modeAfterReset
設定変更時モード振り分け:
| 設定 | リセット | 通常A | 通常B |
|---:|---:|---:|---:|
| 1 | 25.0% | 37.5% | 37.5% |
| 2 | 25.0% | 37.5% | 37.5% |
| 3 | 25.0% | 37.5% | 37.5% |
| 4 | 25.0% | 37.5% | 37.5% |
| 5 | 29.7% | 32.8% | 37.5% |
| 6 | 34.4% | 28.1% | 37.5% |

- リセットモード終了後は通常B以上へ移行。
- 公開解析ではリセットモードから天国約40.3～40.6%、超天国約1.3%、高ストック約0.9%、残り通常B約57.3～57.5%。これは朝一恩恵の説明に必要な範囲として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### stateAfterReset
- 低確/高確のような、上記ゲーム数モードとは独立した朝一内部状態の再抽選テーブルは今回の再探索で確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- シークレットストックはstateではなく独立ストック要素としてsettingChange/powerCycle欄に記録。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時25.0～34.4%でリセットモードへ入り、最大天井512Gへ短縮。
- リセットモードでは128G/256Gにも各25%の天井振り分け。
- リセットモード後は通常B以上確定、天国移行約40%で朝一の短期期待を押し上げる。
- 新台初日328件の実践値では初当たり1/297、0～257G抽出で1/247との当時集計がある。ただしメーカー値ではなく **EMPIRICAL_SINGLE_DATASET** として分離し、性能コアには使用しない。

### resetPenalties
- 設定変更で前日までの内部ボーナスストックが消去されるため、ストック蓄積期待を失う明確な不利がある。
- 前日ゲーム数/天井進捗も設定変更で再抽選されるため、深いハマリの宵越し価値は失われる。

### resetDetection
- 当時実戦比較では **設定変更時に微弱なガックンあり / 純電源OFF→ONではなし** とされる。
- ただし変化は非常に小さく、記事自身が目視判別困難としているため `PRACTICAL_WEAK_GAKKUN_INDICATOR` として保存し、確定判別とはしない。
- 朝一32Gの演出遅れについて、古い解析wikiは設定変更60% / 電源OFF40%で遅れ抽選状態とするが、設定変更専用ではなく電断でも発生するため確定判別には使用しない。
reliability: ANALYSIS_SINGLE_EMPIRICAL_FOR_GAKKUN

### numericResetData
- resetModeRate setting1-4: **25.0%**。
- resetModeRate setting5: **29.7%**。
- resetModeRate setting6: **34.4%**。
- resetNormalARate setting1-4: **37.5%**。
- resetNormalARate setting5: **32.8%**。
- resetNormalARate setting6: **28.1%**。
- resetNormalBRate all settings: **37.5%**。
- resetModeCeilingDistribution: **128G 25.0% / 256G 25.0% / 512G 50.0%**。
- resetModeMaxCeiling: **512G**。
- normalModeMaxCeiling: **1280G**。
- empiricalNewMachineFirstHitAll328Cases: **1/297**。
- empiricalResetEarly0to257GFirstHit: **1/247**。

## missingFields
- メーカー公式の設定変更・電源OFF→ON比較表そのものは現存確認できず、resetBehaviorは当時攻略解析の複数一致を主根拠とする。
- 本機固有の設定変更専用表示・ランプ等の確定判別契約は確認できず。

## conflicts
- 後年5号機クロニクルに導入日「2016年1月」、純増約2.8枚/Gの記述があるが、HAZUSE/K-Navi/必勝本/当時業界記事は2016-04-04導入・約2.9枚/Gで一致。後年整理側の月/丸め誤記とみられるが平均化せず **RELEASE_DATE_AND_NET_INCREASE_RETROSPECTIVE_CONFLICT** として保持し、canonicalは当時複数一致の2016-04-04 / 約2.9枚/G。
- ちょんぼりすた本文の設定6初当たり整数表示1/267は、同系統精密値1/268.8および他複数資料と不整合。canonicalは複数一致の1/268.8とし、整数表示は転記/丸め異常として性能値へ混入しない。

## sources
取得日: 2026-09-08

1. HAZUSE — キングパルサー～DOT PULSAR～
   - https://hazuse.com/machine/pachislot/5S1153/
   - 型式ドットパルサーKPV／CC、検定5S1153、導入2016-04-04、設定別初当たり。
   - reliability: PERIOD_DATABASE_HIGH
2. K-Navi — キングパルサー～DOT PULSAR～
   - https://p-kn.com/slot/2449/
   - ホール導入開始2016-04-04、AT/疑似ボーナス概要。
   - reliability: PERIOD_DATABASE_HIGH
3. グリーンべると / P-WORLD業界ニュース — シンプルにアツい！キングパルサーが再誕
   - https://news.p-world.co.jp/articles/8156/greenbelt
   - 2016-02-16、純増約2.9枚/G、BIG約185枚、REG約63枚、4/3納品開始予定。
   - reliability: INDUSTRY_PERIOD
4. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2710/1/56992
   - 設定別初当たり、機械割、BIG平均185枚、REG平均63枚、導入2016-04-04。
   - reliability: ANALYSIS_HIGH_PERIOD
5. パチ＆スロ必勝本 — システム概要
   - https://p.hisshobon.jp/machine/2710/1/56994
   - モード構成、モード別最大天井、リセットモードの設定変更限定性。
   - reliability: ANALYSIS_HIGH_PERIOD
6. ちょんぼりすた — キングパルサー(ドットパルサー) 天井・解析まとめ
   - https://chonborista.com/slot/yamasa-slot/17100/
   - 機械割、初当たり、45.4G/50枚、純増約2.9枚/G、天井、設定変更/電源ON-OFF比較、モード振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD
7. 期待値見える化 — キングパルサー 朝一リセット後の本当の狙い目を公開
   - https://slotjin.com/slot/kingpulsar-reset/
   - 設定変更/電源OFF→ON直接比較、モード振り分け、天井振り分け、実践値、ガックン比較。
   - reliability: ANALYSIS_HIGH_PERIOD_FOR_TABLES / ANALYSIS_SINGLE_EMPIRICAL_FOR_GAKKUN
8. すろぱちくえすと — キングパルサー 設定判別・設定差・モード移行率
   - https://www.slopachi-quest.com/article/kingpulsar-dotpulsar-settei/
   - 設定変更時モード移行率、リセットモード後移行率、天井振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT_TABLE
9. キングパルサー解析wiki — 朝一の立ち回り
   - https://w.atwiki.jp/kingpulsar777/pages/30.html
   - 2016-05-27時点の朝一遅れ抽選・据え置き判断記録。補助資料。
   - reliability: OLD_COMMUNITY_DATABASE_SINGLE
10. 5号機クロニクル — 山佐5号機一覧
   - https://5goki.com/yamasa
   - 導入月2016-01 / 純増約2.8枚表記をCONFLICT確認用にのみ使用。
   - reliability: RETROSPECTIVE_DATABASE_SINGLE

## confidence
- identity/formalModel/certification/releaseDate: **PERIOD_DATABASE_HIGH_MULTI_SOURCE**
- performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- settingChange/powerCycle macro behavior: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- reset mode/numeric ceiling distribution: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- carryOver: **SUPPORTED_BY_DIRECT_POWER_CYCLE_TABLE**
- resetDetection: **ANALYSIS_SINGLE_EMPIRICAL_WEAK_INDICATOR**
