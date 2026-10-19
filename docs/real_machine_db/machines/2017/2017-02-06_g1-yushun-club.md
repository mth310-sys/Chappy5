machineName: GⅠ優駿倶楽部
manufacturer: KPE
releaseDate: 2017-02-06
recordNumber: 1046
generation: 5号機 / 5.5号機期
systemType: ART / 周期育成・CZ搭載
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi、一撃、ちょんぼりすた、当時解析で2017-02-06導入が一致。
- メーカーはKPE。
- 正式型式名・検定番号は機種名/GⅠ/GI/G1/優駿倶楽部/KPE/型式/検定番号を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: DATABASE_PLUS_ANALYSIS_HIGH_FOR_RELEASE; UNVERIFIED_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.4% |
| 3 | 99.6% |
| 4 | 103.4% |
| 5 | 105.5% |
| 6 | 110.2% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「GⅠロード」初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/348.8 |
| 2 | 1/342.2 |
| 3 | 1/324.1 |
| 4 | 1/296.4 |
| 5 | 1/283.1 |
| 6 | 1/266.7 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- メーカー公表・一般解析の代表値は約32G/50枚。
- 一方、期待値計算資料ではMB込み実質ベースを約46.5Gとして扱う例があるため、物差し本線は公表ベース約32G、MB込み実戦計算値は定義差として混同しない。
reliability: ANALYSIS_HIGH_WITH_DEFINITION_NOTE

## netIncrease
- ART「GⅠロード」: 約2.0枚/G。
- 1セット30G+α、初期セットのみ30～300G+α。
reliability: DATABASE_PLUS_ANALYSIS_HIGH

## basicPayout
- ART主体機のため固定ボーナス獲得枚数は本線比較対象外。
- GⅠロード: 1セット30G+α。
- 11セット目海外レース勝利後の「凱旋ロード」: 1セット30G+α、継続率88%。
reliability: DATABASE_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は1週8Gを基本とし、およそ8週間（約64G）で育成→新馬戦チャレンジへ。
- 通常天井は999G以降の新馬戦チャレンジでART確定。
- 主役馬シンボリクリスエス選択時は天井短縮あり。ART終了直後の選択なら333G/555G（1:1）へ短縮、後続選択時はさらに111G短縮する解析あり。
- 詳細な通常時全育成抽選・全シナリオはSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_BEHAVIOR_V0_7
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数はRESET。
- 出走までの周期はRESET。
- 次回ARTシナリオ、スケジュールモードは再抽選。
- 主役馬/競走馬も朝一で再抽選。
- 朝一ステージは温泉ゾーン。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### carryOverBehavior
- 据え置きでは天井ゲーム数、出走までの周期、次回ARTシナリオ、スケジュールモードを引き継ぐ。
- 朝一の競走馬は再抽選されるため、競走馬表示だけで据え置き判別はできない。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井、出走までの周期、次回ARTシナリオ、スケジュールモードをCARRYOVER。
- 朝一画面上は温泉ゾーンへ移行するが、据え置き時は「見た目のみ」の温泉ゾーンと解析される。
- 競走馬は純電断でも再抽選。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井/周期 `RESET`。
- 据え置き・純電源OFF→ON: `CARRYOVER`。
reliability: CONTEMPORARY_ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更後も通常天井の基本上限は999G以降の新馬戦チャレンジ。
- 設定変更専用の固定短縮天井は確認していない。
- シンボリクリスエス選択による333G/555G等の天井短縮は主役馬依存であり、設定変更専用恩恵とは分離する。
reliability: ANALYSIS_HIGH

### modeAfterReset
- スケジュールモード再抽選。
- 次回ARTシナリオ再抽選。
- 朝一専用の設定変更限定モード振り分けは `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RESELECT_CONTRACT

### stateAfterReset
- 朝一は温泉ゾーン表示。
- 設定変更時の内部状態について、今回の本機固有資料で比較可能な数値テーブルは固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電断/据え置き時は表示上温泉ゾーンへ移行しても内部的にリセットされたとは扱わない。
reliability: ANALYSIS_HIGH_FOR_STAGE_BEHAVIOR; UNVERIFIED_FOR_INTERNAL_STATE_NUMERIC

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は周期・シナリオ・スケジュールを再抽選するため、前日不利進捗を消せる一方、通常999G天井そのものが固定短縮される仕様ではない。
- 主役馬再抽選でシンボリクリスエス選択なら天井短縮の可能性があるが、設定変更専用確率としては公開固定値を確認していない。
reliability: DERIVED_FROM_VERIFIED_CONTRACT

### resetPenalties
- 前日の天井G数・周期進捗は設定変更で消失する。
- 前日がシナリオ/スケジュール上有利でも設定変更で再抽選される。
reliability: DERIVED_FROM_VERIFIED_CONTRACT

### resetDetection
- 朝一温泉ゾーンは設定変更・純電断どちらでも発生するため単独では判別不可。
- 据え置きでは周期を引き継ぐため、前日最終Gを把握している場合に新馬戦到達Gの違和感が据え置き推測材料になる。
- ガックン確定判別の本機固有直接資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: CONTEMPORARY_ANALYSIS_HIGH_FOR_PERIOD_INDICATOR; UNVERIFIED_FOR_GAKKUN

### numericResetData
- setting-change fixed short ceiling: `NONE_CONFIRMED`。
- normal ceiling: **999G以降の新馬戦チャレンジ**。
- シンボリクリスエスがART後1周期目に選択された場合の短縮: **333G or 555G（1:1）**。
- fixed-window morning ART hit probability: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- K-Navi、P-WORLD、一撃、ちょんぼりすた、期待値見える化、当時解析を横断。
- 性能コアは主要数値が複数資料で一致。
- 50枚ベースは公表約32GとMB込み期待値計算約46.5Gを定義差として分離。
- resetBehaviorは設定変更/据え置き/純電断を分離し、温泉ゾーンの見た目だけの移行を内部リセットと誤認しない。

## conflicts
- baseGamesPer50: 公表代表約32G vs MB込み期待値算定約46.5G。`DEFINITION_DIFFERENCE_PUBLIC_BASE_VS_MB_INCLUDED_EFFECTIVE_BASE`。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change internal-state numeric distribution: `UNVERIFIED_AFTER_RESEARCH`。
- deterministic reset detection via gakkun: `UNVERIFIED_AFTER_RESEARCH`。
- fixed-window morning ART-hit probability: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- DATABASE / K-Navi: https://p-kn.com/slot/2677/
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8235
- ANALYSIS / 一撃: https://1geki.jp/slot/s_derbykurabu/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/kpe-slot/29777/
- ANALYSIS / 期待値見える化 朝一・天井: https://slotjin.com/zone/g1-dclub/
- ANALYSIS / スロットガーデン: https://xn--mckza4ard4ttb2d.com/g1-dclub
- ANALYSIS / pachislo-data: https://pachislo-data.com/kpe/31995
- ANALYSIS / pachi-data: https://pachi-data.com/g1-dclub-kaiseki/

## retrievalHistory
- performance: GⅠ優駿倶楽部 / GI / G1 + 機械割 / ART初当たり / 50枚 / 純増 / セットG。
- reset: 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 周期 / 温泉 / スケジュール / シナリオ / 天井。
- identity: GⅠ優駿倶楽部 + KPE + 型式 / 検定番号。
- 複数解析・古いDBを横断し、固定できない型式/検定番号と一部内部状態のみUNVERIFIEDとした。