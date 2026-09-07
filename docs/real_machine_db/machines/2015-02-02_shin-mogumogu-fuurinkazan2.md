# 真モグモグ風林火山2

machineName: 真モグモグ風林火山2
alternateName: 真モグモグ風林火山 弐の陣
manufacturer: ネット
releaseDate: 2015-02-02
releaseDatePrecision: official_planned_and_multi_source_hall_start
releaseDateNote: NETの2015-01-23公式リリースで「2月2日より全国に導入予定」、K-Naviとパチ7/K-Navi導入カレンダーでも2015-02-02ホール導入を確認。
generation: 5号機
systemType: AT / 50G周期CZ / ゲーム数上乗せ
modelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- NETのモグモグ風林火山シリーズ第5弾。公式発表では2006年「真モグモグ風林火山」の9年ぶりの正統後継機。
- NET公式発表、K-Navi、P-WORLD、パチマガスロマガ旧DBで2015年機の同一仕様を照合。
- 正式型式名/検定番号は `真モグモグ風林火山2 / 真モグモグ風林火山 弐の陣 / NET / 型式 / 検定 / 検定通過` を組み替えて再探索したが、安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 98.3% |
| 3 | 99.5% |
| 4 | 102.2% |
| 5 | 106.6% |
| 6 | 114.8% |

- K-Naviとパチマガスロマガ旧DBで一致。パチマガスロマガはAT初当たりとともにメーカー発表値として掲載。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / MANUFACTURER_ANNOUNCED_VALUES_VIA_ANALYSIS_DB

## initialHitBySetting

### AT「覇業への道」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/266 |
| 2 | 1/256 |
| 3 | 1/247 |
| 4 | 1/231 |
| 5 | 1/207 |
| 6 | 1/186 |

- K-Naviとパチマガスロマガ旧DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / MANUFACTURER_ANNOUNCED_VALUES_VIA_ANALYSIS_DB

## baseGamesPer50

- **32.1G / 50枚**。
- パチマガスロマガ旧DBの通常時小役解析ページに明記。
- confidence: ANALYSIS_SINGLE_STRONG_DB

## netIncrease

- AT「覇業への道」: **約2.4枚/G**。
- NET発表会を扱った業界記事、P-WORLD、パチマガスロマガ旧DBで一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「覇業への道」は、突入時の「御褒美乱打」で初期ゲーム数を決定するため固定1セット枚数ではない。
- P-WORLD表記: **初回上乗せゾーンでの獲得ゲーム数+α**。
- 全国制覇時の「覚醒艶舞」は **100G or 300G上乗せ**。NET公式発表でも100G保証の上乗せ覚醒ゾーンとして案内。
- 物差し用途では固定獲得枚数を捏造せず、純増2.4枚/G・初期G可変として保持。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は約50G（液晶50日）周期でCZ「モグラ叩き合戦」へ移行。
- 天井は **モグラ叩き合戦 最大15回目（15周期）でAT確定**。
- 別CZ「提督来襲」はP-WORLDでAT期待度45%。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_NUMERIC_RESET_EVIDENCE_AND_POWER_CYCLE_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数/周期進捗をリセット**。
- **内部モード・内部状態を再抽選**。
- **ステージを再抽選**。
- 周期日数、獲得領土も設定変更で再抽選されると当時解析資料で確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は **周期日数・獲得領土・ステージを内部的に引き継ぐ**。
- 前日最終ステージと朝一ステージが同じ場合は据え置き材料、異なる場合は設定変更濃厚材料となる。
- 天井/周期進捗についても電源OFF→ON引継ぎ契約と整合するが、一般論ではなく本機固有解析に基づく。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 設定変更なしの **電源OFF→ONでは天井までの進捗・内部モード・内部状態・ステージを引き継ぐ** と当時解析資料に明記。
- 設定変更時の再抽選と区別して保存。
- confidence: ANALYSIS_SINGLE_STRONG_DIRECT_CONTRACT_WITH_SECONDARY_SUPPORT

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 純電断: **CARRY_OVER**。
- 本機は50G周期管理で、最大15周期が通常天井。

### ceilingAfterReset

- 設定変更後も最大天井そのものは **15周期**まで到達し得る。
- ただしリセット後専用の天井周期振り分けはAT後より**若干優遇**され、浅い周期がわずかに選ばれやすい。
- 「固定○Gへ短縮」とは扱わない。
- confidence: ANALYSIS_HIGH_FOR_MAX_CEILING / ANALYSIS_SINGLE_STRONG_FOR_RESET_DISTRIBUTION

### modeAfterReset

- 設定変更時に内部モードを再抽選。
- K-Naviには本機固有の「モード移行率(設定変更時)」解析項目が存在することを確認したが、今回取得可能な本文では数値テーブルを安全に再構成できなかったため、全モード振り分けの転記は行わない。
- `RELOTTERY_CONFIRMED / FULL_NUMERIC_TABLE_NOT_SAFELY_RECOVERED_THIS_RUN`。

### stateAfterReset

- 設定変更時: **内部状態再抽選**。
- 電源OFF→ON: **引継ぎ**。
- confidence: ANALYSIS_SINGLE_STRONG_DIRECT_CONTRACT

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- リセット後はAT後より天井周期振り分けが若干優遇。
- ただし実戦値では強い朝一恩恵は確認されず、0Gから狙うほどの大幅優遇とは評価されていない。
- 固定短縮天井ではない。

### resetPenalties

- 設定変更専用の明確な冷遇モード/固定不利契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一実戦値では通常時より1周期目の当選が弱く見えるとの観測があるが、解析上の設定変更ペナルティとは確定していないためcanonicalな不利値には採用しない。

### resetDetection

- **朝一ステージ比較**: 据え置きは前日最終ステージ引継ぎ、設定変更は再抽選。前日と異なればリセット濃厚材料。
- **周期日数 / 獲得領土**も設定変更時再抽選、据え置き時引継ぎのため判別材料になり得る。
- 本機固有の確定的なリールガックン契約は、`ガックン / リール / 設定変更判別 / 朝一` を含め再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更後の天井周期振り分けはAT後より若干浅め。
- **10周期目は設定1で約15%**との当時解析整理あり。
- それでも最深 **15周期**選択が中心で、実戦値でも15周期到達例が複数確認されている。
- 朝一実戦集計は **454件**（新台初日1回目初当たり、設定不問）という当時記事が存在。ただしこれは解析確率ではなく実戦観測として分離保持。
- full reset ceiling-cycle table: `NOT_SAFELY_RECOVERED_THIS_RUN`。

### publicMorningNumbers

- 設定1・設定変更後の10周期目当選率: **約15%**（当時解析整理）。
- 朝一実戦サンプル: **454件**（設定不問、新台初日1回目初当たり）。
- 大幅なリセット恩恵は観測されず、最大15周期到達例あり。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `真モグモグ風林火山2 / 真モグモグ風林火山 弐の陣 / モグモグ風林火山 弐の陣 / 真モグ2`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / 天井周期 / 周期日数 / 獲得領土 / ステージ / モード / 状態 / ガックン / 50枚 / 千円 / コイン持ち / 型式 / 検定`。
- 資料系統: NET公式リリース、業界記事、K-Navi、P-WORLD、旧パチマガスロマガ、当時期待値/解析サイト、後年回顧資料。
- 4号機「真モグモグ風林火山」、2008年「モグモグ風林火山」、2019年「天晴！モグモグ風林火山 全国制覇版」は別機種。検索混入した数値は使用していない。

## release-boundary audit

- 2015-01-26同日群を再監査し、実ホール導入の新規5号機としてスーパージャックポット以外を安全に固定できず `2015-01-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- `トラッド` の2015-01-26は検定告示日資料が混在し、ベルコ公式は2015年3月登場としているため01/26導入へ誤登録しない。
- 2015-01-27～2015-02-01も具体日/導入/メーカー・業界資料を再探索。実ホール導入日を安全に固定できる未登録5号機を確認できず `BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH`。
- 2015-02-02のK-Navi導入カレンダーではパチスロとして **真モグモグ風林火山2（ネット） / ニューパルサーデラックス（山佐）** を確認。NET公式も真モグ2を2月2日全国導入予定と明記。
- したがって2015-02-02群は `OPEN`。次は **ニューパルサーデラックス** を処理する。

## sources

取得日: 2026-09-07

1. NET公式リリース（Dream News転載、発売発表）: https://www.dreamnews.jp/press/0000103941/
2. NET公式リリース（2015-02-02全国導入予定）: https://www.dreamnews.jp/press/0000106265/
3. K-Navi 機種ページ: https://p-kn.com/slot/2193/
4. K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
5. P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/7608
6. P-WORLD / PiDEA業界ニュース（発表会、純増2.4枚）: https://news.p-world.co.jp/articles/7071
7. 娯楽産業 発表会記事: https://www.goraku-sangyo.com/%E3%80%90%E5%8B%95%E7%94%BB%E3%81%82%E3%82%8A%E3%80%91%E3%83%8D%E3%83%83%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E7%9C%9F%E3%83%A2%E3%82%B0%E3%83%A2%E3%82%B0%E9%A2%A8%E6%9E%97%E7%81%AB/
8. パチマガスロマガ旧DB 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/a.php
9. パチマガスロマガ旧DB AT初当たり/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/h.php
10. パチマガスロマガ旧DB 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/c.php
11. パチマガスロマガ旧DB INDEX: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/net_slot_160.php
12. 期待値見える化 朝一リセット解析: https://slotjin.com/slot/mogumogu2-reset/
13. イチカツ 朝一設定変更/据え置き: https://ichikatsu.com/sinmog2-asaiti/
14. パチ7 上乗せ/導入日: https://pachiseven.jp/machines/4376/cutout/6
15. 後年回顧（天井15周期等の照合）: https://www.nikuziru.com/archives/2561

## missingFields

- 正式型式名: `UNVERIFIED_AFTER_RESEARCH`。
- 検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の全内部モード振り分け数値: 項目存在と再抽選は確認したが、完全テーブルを安全に復元できず `NOT_SAFELY_RECOVERED_THIS_RUN`。
- 本機固有ガックン契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- 現時点で性能コアの主要数値に平均処理が必要な直接CONFLICTは確認していない。
- 「リセット恩恵なし」という実戦評価と、「リセット後天井周期がAT後より若干優遇」という後発解析は矛盾として平均化せず、**実戦観測 vs 解析テーブル**の定義差として併存させる。後者を構造上のcanonical挙動とする。
