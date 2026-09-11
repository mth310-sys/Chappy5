# SLOT WONDER AGENT

recordNo: 1298
machineName: SLOT WONDER AGENT
machineNameVariants: WONDER AGENTS / ワンダーエージェント / スロットワンダーエージェント
manufacturer: ジェイピーエス（タイラベストビート / ワンダーランドPB）
formalModel: Sオリスロ2AA
certificationNumber: 9S0186
releaseDate: 2019-07-08
generation: 6号機
systemType: AT / 疑似ボーナス連荘タイプ / PB

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.4% |
| 3 | 99.8% |
| 4 | 101.2% |
| 5 | 104.0% |
| 6 | 105.6% |

モゲスロ、すろぱちくえすと、後年DB等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス(AT)初当たり |
|---|---:|
| 1 | 1/413.4 |
| 2 | 1/408.1 |
| 3 | 1/396.8 |
| 4 | 1/382.4 |
| 5 | 1/275.3 |
| 6 | 1/269.3 |

モゲスロ、すろぱちくえすと等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約53.0G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 約3.0枚/G。

業界記事、複数解析で一致。

## basicPayout

- BIG BONUS: 70G、約210枚。
- REG BONUS: 30G、約90枚。
- ボーナス後32G以内の連荘を主軸とし、連荘率は最大約90%とされる。

## modeSpecificMinimumData

- 有利区間1000G消化が最深部のゲーム数天井で、到達時はボーナス(AT)当選。
- 公開モード天井: 通常1 1000G / 通常2 500G / 通常Aは78Gまで約1/156で抽選し非当選で有利区間転落 / 通常B 78G / 天国A・天国B・ドキドキ・超ドキドキ・保証 32G。
- 約32G以内の連荘を主軸とする沖ドキ系のゲーム性。
- 本機はJPSの `Sオリスロ2AA` 共通メイン基板を用いたホール法人PB系列の一機種。SLOT WONDER AGENTはタイラベストビートのワンダーランド系列向け。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_ADVANTAGEOUS_SECTION_DETAIL
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 当時解析表で **天井リセット / 内部状態再抽選 / モード再抽選**。設定変更時は前日天井G数・内部状態・モードを引き継がない。
- carryOverBehavior: 据え置き専用の独立表は確認できないが、設定変更を伴わない電源OFF→ONでは天井・内部状態・モードを引き継ぐと当時解析に明記。通常営業上の据え置き挙動はこの契約と整合するが、据え置きだけを別条件で直接規定する資料は `UNVERIFIED_AS_DISTINCT_CONDITION`。
- powerCycleBehavior: 当時解析表で **天井引継ぎ / 内部状態引継ぎ / モード引継ぎ**。
- gameCounterReset: 設定変更でリセット。電源OFF→ONのみでは引継ぎ。
- ceilingAfterReset: 最深部1000Gという通常天井は確認できるが、設定変更専用の短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 設定変更で再抽選。電源OFF→ONでは引継ぎ。設定変更時の各モード振り分け公開数値は今回固定できず `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更で内部状態再抽選。電源OFF→ONでは内部状態引継ぎ。
- advantageousSectionReset: 有利区間管理機で、通常Aは78Gまでの抽選後、非当選時に有利区間転落とする解析あり。ただし **設定変更 / 据え置き / 純電断ごとの有利区間ランプ・区間状態を直接規定する本機固有契約** は今回の資料では固定できず `APPLICABLE_BUT_RESET_CONTRACT_PARTIAL`。一般6号機仕様からの推測はしない。
- resetBenefits: 設定変更でモード再抽選は確認できるが、リセット時に特定モードへ優遇される公開確率、朝一専用高確、短縮天井等は確認できず `NONE_NUMERICALLY_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 有利区間やゲーム数挙動を利用できる可能性はあるが、当時攻略では「リセット狙いできない / 朝一挙動調査中」とする資料も存在。本機固有ガックン条件・発生率、確定的な朝一ランプ判別は固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更時のモード振り分け・朝一特定G以内当選率・リセット恩恵発生率の公開確定値は今回未確認。通常時のモード天井値とは区別する。

### resetBehavior 再探索メモ

「SLOT WONDER AGENT / WONDER AGENTS / ワンダーエージェント / スロットワンダーエージェント / Sオリスロ2AA / JPS / タイラベストビート」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ」を組み合わせて再探索。モゲスロ、すろぱちくえすと、ちょんぼりすた、業界記事、検定資料、後年DBを横断。モゲスロの設定変更/電源OFF ON表で天井・内部状態・モードのRESET/CARRYを直接固定できた。一方、設定変更時モード振り分け、ガックン、有利区間の朝一ランプ契約は直接値を固定できなかったため推測しない。

## qualityNotes / conflicts

- `Sオリスロ2AA` は2019-06-03付東京都公安委員会検定通過資料で、メーカー `ジェイピーエス`、検定番号 `9S0186` を直接確認。
- 2019年当時の業界記事では、同一メイン基板 / リール / 出玉性能を共有し、サウンド・パネル・サブ基板・設定示唆等を各ホール法人仕様に変更したPB系列として説明される。
- `SLOT WONDER AGENT` は業界記事で「7月初旬」、モゲスロ・すろぱちくえすとで **2019-07-08** 導入が一致するため、この日をcanonicalとする。
- 名称は業界記事 `SLOT WONDER AGENT`、解析では `WONDER AGENTS` と複数形表記が混在。別機種とは扱わず表記揺れCONFLICTとして保持。
- 本系列の別PBとして `BELLE CITY` / `花娘` / `どき!すろ` / `タマどき!`、後年資料では `プレドキ!` も確認される。各PBは導入時期・法人・サブ演出差があるため一括レコード化せず、全機種方針に従い個別時系列監査する。

## sources

取得日: 2026-09-11

1. 遊技通信 / 長崎県遊技業協同組合転載 — 6社共同PBパチスロ企画
   - https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
   - `Sオリスロ2AA` 共通仕様、PB各名称/法人、WONDER AGENT 7月初旬、BELLE CITY/花娘/タマどき!/どきすろの投入時期、純増約3.0枚/G、BIG70G約210枚、REG30G約90枚、最大約90%連荘を確認。
   - reliability: INDUSTRY
2. Amusement Japan — 6社共同PB機企画
   - https://amusement-japan.co.jp/article/detail/10001249/
   - 共通スペック、法人別PB、約3.0枚/G、BIG70G/REG30G、32G連荘仕様を確認。
   - reliability: INDUSTRY
3. 遊技通信 — 東京都公安委員会検定通過状況（2019-06-03）
   - https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%886%E6%9C%883%E6%97%A5%EF%BC%89/
   - `Sオリスロ2AA`、ジェイピーエス、検定番号 `9S0186`。
   - reliability: INDUSTRY / PUBLIC_INSPECTION_REPORT
4. モゲスロ — WONDER AGENTS
   - https://moge-site.com/archives/22080
   - 2019-07-08導入、JPS、6号機AT、設定別初当たり/機械割、**設定変更: 天井RESET・内部状態/モード再抽選、電源OFF ON: 天井/内部状態/モード引継ぎ**、1000G天井。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — ワンダーエージェント 天井
   - https://www.slopachi-quest.com/article/wonder-agents-tennjou/
   - 2019-07-08導入、1000G天井、53.0G/50枚、モード別天井、有利区間関連の通常A挙動、朝一挙動は当時調査中。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — ワンダーエージェント 設定
   - https://www.slopachi-quest.com/article/wonder-agents-settei/
   - 設定別初当たり/機械割、約53G/50枚、純増約3.0枚/G。
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — オリスロ2 / 花娘系解析
   - https://chonborista.com/slot/jps-slot/89525/
   - 共通スペック、設定別初当たり/機械割、53G/50枚、純増約3.0枚/G、BIG約210枚/REG約90枚、モード天井。
   - reliability: ANALYSIS_HIGH

## missingFields

- 設定変更時のモード振り分け公開数値
- 据え置きを純電源OFF→ONと分離した本機固有直接契約
- 設定変更 / 据え置き / 純電断ごとの有利区間ランプ/区間開始状態の直接契約
- 本機固有ガックン条件・発生率・確定率

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_ADVANTAGEOUS_SECTION_DETAIL

## conflicts

- 機種名: `SLOT WONDER AGENT` vs `WONDER AGENTS`。同じPB機の表記揺れとして保持。
- PB系列の導入日は各法人ごとに異なる。系列全体を一律2019-08-05とする後年まとめ資料があるが、本機は当時/個別資料一致の2019-07-08をcanonicalとする。
