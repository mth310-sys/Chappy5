# 戦国コレクション2

machineName: 戦国コレクション2
alternateName: 戦コレ2
manufacturer: KPE
releaseDate: 2015-03-02
releaseDatePrecision: official_exact_hall_start
releaseDateNote: KONAMI公式LINEUPが稼動開始2015-03-02を明記。K-Naviも2015-03-02で一致。業界発表では納品予定2015-03-01のため、納品日とホール稼働開始日を分離する。
generation: 5号機
systemType: AT / CZ / 規定コレ数管理
modelName: 戦国コレクション2KS
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
settingConfiguration: 1 / 2 / 3 / 4 / 5 / 6
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_UNVERIFIED

## identity

- KONAMI公式「戦コレ」LINEUPで、発売元KPE、稼動開始2015-03-02を直接確認。
- K-Naviもホール導入開始2015-03-02。
- 中古実機流通資料で型式名 `戦国コレクション2KS` を確認。
- 業界記事では2015-03-01納品予定。DBのreleaseDateはホール稼働開始の2015-03-02を採用。
- confidence: OFFICIAL_FOR_RELEASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 100.1% |
| 4 | 103.5% |
| 5 | 108.1% |
| 6 | 110.9% |

- K-Navi: 97.0 / 98.5 / 100.1 / 103.5 / 108.1 / 110.9%。
- 5号機クロニクルも同系列。
- より精密な後年整理値として97.02 / 98.52 / 100.08 / 103.48 / 108.05 / 110.90%も流通するが、丸め精度差として扱いCONFLICTにはしない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT「世界制覇ラッシュ」初当たり |
|---:|---:|
| 1 | 1/278.9 |
| 2 | 1/274.6 |
| 3 | 1/254.1 |
| 4 | 1/244.8 |
| 5 | 1/224.3 |
| 6 | 1/219.6 |

- K-Naviで直接確認。pacnkも同系列。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## czInitialHitBySetting

| 設定 | 鬼ヶ島チャレンジ |
|---:|---:|
| 1 | 1/213.0 |
| 2 | 1/204.4 |
| 3 | 1/200.3 |
| 4 | 1/185.8 |
| 5 | 1/185.3 |
| 6 | 1/179.7 |

- AT初当たり構造上重要なため最低限値として保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約34.2G/50枚**。
- 複数後年整理資料で一致。メーカー公式値は今回固定できず、解析/実戦整理値として扱う。
- confidence: ANALYSIS_MULTI_SOURCE_SECONDARY

## netIncrease

- AT「世界制覇ラッシュ」: **約3.0枚/G**。
- KONAMI公式は「AT3.0」を訴求。グリーンべると、K-Navi、P-WORLD、パチマガスロマガでも一致。
- confidence: OFFICIAL_PLUS_INDUSTRY_MULTI_SOURCE

## basicPayout

- AT「世界制覇ラッシュ」: **1セット40G+α**。
- 基本パート35G＋継続バトル5Gのセット継続型。
- confidence: OFFICIAL/INDUSTRY/ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はゲーム数を「コレ」で管理し、基本1G消化で1コレ獲得。規定コレ到達がATの主ルート。
- モード別天井: **通常A 992コレ / 通常B 640コレ / 特殊 999コレ / 天国 128コレ / 超天国 32コレ**。
- K-Navi/パチマガスロマガでは最深天井を999コレと表現する資料もあるが、特殊モードを含む最大値と整合する。
- AT8セット完走後などは超天国が関係するが、通常モード全移行テーブルは物差しDB対象外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_RESET_MODE_TABLE_AND_PARTIAL_CARRYOVER_POWER_UNVERIFIED
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更時はモードを再抽選**。
- 設定変更後モード移行率が公開されており、通常時/AT後より通常Bが優遇される設定が多い。
- 設定1では通常A25.0% / 通常B50.0% / 天国25.0%。
- confidence: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior

- 当時朝一攻略資料は、**据え置き宵越し時のフェイク前兆が内部ゲーム数依存**と記述しており、内部コレ進行が据え置き時に継続していることを示す実戦判別情報がある。
- ただし、据え置き時に「モード・内部高確・鬼ヶ島関連状態の全てを引き継ぐ」と明記した本機固有の包括契約は固定できず、それらは `UNVERIFIED_AFTER_RESEARCH`。
- game/counter carryover confidence: ANALYSIS_SINGLE_SUPPORTIVE

### powerCycleBehavior

- **設定変更なしの純電源OFF→ON**で、コレ数・モード・高確状態・前兆状態がどう処理されるかを本機固有資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機慣例から補完しない。

### gameCounterReset

- 設定変更後は新規モード抽選を前提に0コレからのリセット狙い解析・期待値が公開されている。
- ただし今回確認した資料では「内部コレカウンタを0へクリア」とする独立した直接文言を固定できなかったため、厳密契約は `SUPPORTED_BY_RESET_ANALYSIS_BUT_EXACT_COUNTER_CLEAR_WORDING_UNVERIFIED`。

### ceilingAfterReset

- 固定一律の短縮天井ではなく、**設定変更時モード再抽選結果に応じて天井が変化**。
- 通常A: 992コレ / 通常B: 640コレ / 特殊: 999コレ / 天国: 128コレ。
- 設定1では通常B50%＋天国25%のため、75%が通常Aより浅いモードへ振り分けられる。
- confidence: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### modeAfterReset

設定変更後モード移行率:

| 設定 | 通常A | 通常B | 特殊 | 天国 |
|---:|---:|---:|---:|---:|
| 1 | 25.0% | 50.0% | — | 25.0% |
| 2 | 25.0% | 50.0% | — | 25.0% |
| 3 | 37.5% | 37.5% | — | 25.0% |
| 4 | 37.5% | 37.1% | 0.39% | 25.0% |
| 5 | 50.0% | 24.2% | 0.78% | 25.0% |
| 6 | 62.5% | 10.9% | 1.56% | 25.0% |

- 当時解析記事の設定別リセットテーブルを保存。
- 特殊モードは設定4以上のみ。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### stateAfterReset

- 通常時にCZ「鬼ヶ島チャレンジ」後の高確等が存在することは確認できるが、**設定変更直後の内部高確/低確等の初期振り分け**は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- モードBが通常より優遇され、浅い規定コレ当選・最大640コレ天井を狙いやすい。
- 設定1の設定変更後は通常A25% / 通常B50% / 天国25%。
- 当時リセット期待値記事では設定1・AT後128コレ抜けまで条件で、0コレからAT当選まで打つ期待値を **+1070円** とする解析もある。ただし市場収益値は本DBの性能コアには採用せず、朝一恩恵の存在確認の補助にのみ使用。

### resetPenalties

- 設定変更固有の主要な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 高設定ほど通常B比率が必ず高いわけではなく、設定5/6では通常A比率が高い点は「不利」ではなく設定別モード配分差として保持。

### resetDetection

- 当時攻略記事ではガックンについて当初「効かない」と記述後、読者情報で「有効」と訂正しており、根拠が安定しない。
- したがって **`CONFLICT_WEAK_EVIDENCE_GAKKUN_EFFECTIVE_VS_INITIAL_NO_EFFECT_CLAIM`** とし、確定判別契約には採用しない。
- 据え置き時はフェイク前兆が内部ゲーム数依存とされ、前日コレ数と当日ゾーン挙動から据え置きを推測する余地がある。

### numericResetData

- 設定変更後モード振り分け: 上表。
- 設定1: **通常A25.0% / 通常B50.0% / 天国25.0%**。
- 設定変更後・128コレ抜け時は通常B滞在比率が高くなるという当時朝一攻略解説あり。
- 通常B天井: **640コレ**。
- 天国天井: **128コレ**。
- 通常A天井: **992コレ**。
- 特殊天井: **999コレ**。

### publicMorningNumbers

- 設定変更時天国: **全設定25%**。
- 設定変更時通常B: **設定1/2 50.0%、3 37.5%、4 37.1%、5 24.2%、6 10.9%**。
- 設定変更時特殊: 設定4 0.39%、5 0.78%、6 1.56%。
- 朝一客AIで利用可能な公開リセット数値として採用。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `戦国コレクション2 / 戦コレ2 / 戦国コレクション2KS / KPE / 戦コレ 第二弾`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / コレ数 / 天井 / 992 / 640 / 999 / 128 / モード移行 / モード振り分け / 高確 / ガックン / 50枚 / コイン持ち / ベース`。
- 資料系統: KONAMI公式、当時業界記事、K-Navi、パチマガスロマガ、P-WORLD、当時2015年解析ブログ、5号機回顧DB、中古実機型式資料。
- 後継 `戦国コレクション4/5/6` のリセット契約は本機へ転記しない。

## release-boundary audit

- 前handoffの2015-02-24～03-01境界を再監査。K-Navi 2015年2月カレンダーでは02/23以降は「2月下旬 スーパービンゴNEO-30」までで、追加の具体日付き未処理5号機を固定できず `2015-02-24_TO_03-01_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH`。
- 2015-03-02群は今回の横断検索で少なくとも **コブラ（SNKプレイモア） / スーパーラクラクビスカス（パイオニア） / 戦国コレクション2（KPE） / パチスロサイバーブルー（三洋物産） / パチスロベルセルク（七匠）** を同日導入候補として検出。
- よって03/02群はOPENのまま。次回は同日群の未処理機を順次処理し、全メーカー再監査後にCLOSED判定する。

## sources

取得日: 2026-09-07

1. KONAMI 戦コレ公式LINEUP: https://www.konami.com/games/sencolle/lineup/slot/index.php
2. K-Navi 戦国コレクション2: https://p-kn.com/slot/2201/
3. グリーンべると「高純増3.0枚& “唄う巨大役物”搭載『戦コレ2』」: https://web-greenbelt.jp/00007498/
4. PiDEA「KPE『戦コレ2』5号機史上最多MYで登場」: https://www.pidea.jp/articles/KPE%E3%80%8C%E6%88%A6%E3%82%B3%E3%83%AC2%E3%80%8D5%E5%8F%B7%E6%A9%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%9AMY%E3%81%A7%E7%99%BB%E5%A0%B4
5. パチマガスロマガ 戦国コレクション2: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/39/a.php
6. パチマガスロマガ AT突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/39/l.php
7. P-WORLD 戦国コレクション2: https://www.p-world.co.jp/machine/database/7631
8. すろぱちくえすと 設定別モード移行率解析: https://www.slopachi-quest.com/article/sengoku-collection-mode/
9. すろぱちくえすと 朝一設定変更・リセット狙い: https://www.slopachi-quest.com/article/senkore-reset/
10. すろぱちくえすと 天井・狙い目: https://www.slopachi-quest.com/article/sengoku-collection2/
11. pacnk 戦国コレクション2: https://pacnk.com/slot/tools/sh_sengokucollection2015.html
12. みんスロ 戦国コレクション2: https://minslo.com/%E6%88%A6%E5%9B%BD%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B32/
13. 中一商事 KPE 戦国コレクション2: https://www.nakaiti.com/html/sKpe085.html
14. 2015年導入スロット新台まとめ（03/02群横断補助）: https://slotnews777.blog.fc2.com/blog-entry-2348.html

## missingFields

- inspectionNumberDirect
- exactInternalCollectionCounterClearWordingOnSettingChange
- fullCarryOverContractForModeAndInternalState
- powerCycleBehaviorDirect
- resetInitialInternalHighLowDistribution
- authoritativeGakkunResetDetectionContract

## conflicts

- `RESET_DETECTION_GAKKUN_WEAK_CONFLICT`: 当時朝一攻略記事内で「ガックンは効かない」から「読者情報では有効」へ訂正。一次/安定照合不足のため変更判別確定値にはしない。
- `RELEASE_DATE_NOT_CONFLICT`: 2015-03-01は業界記事の納品予定、2015-03-02はKONAMI公式の稼動開始。定義差として分離。
