# パチスロ ファイヤードリフト

recordNo: 1615
machineName: パチスロ ファイヤードリフト
aliases: ファイヤードリフト / FIRE DRIFT / Sファイヤードリフト
manufacturer: ロデオ（製造） / サミー
formalModel: S ファイヤードリフト FX
inspectionCode: 330219
releaseDate: 2023-12-18
generation: 6.5号機 / メダル機
systemType: AT / 疑似ボーナス + MISSION
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチビー、K-Navi、主要解析で2023-12-18導入が一致。
- サミー発表時は2023年12月中旬予定。実導入日として2023-12-18をcanonical採用。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- サミー/遊技日本の新機種発表で製造元ロデオ、型式名 `S ファイヤードリフト FX` を確認。
- 検定番号 `330219` は機種DB Ativo掲載値。正式型式は業界発表と一致するが、検定番号自体は今回公的原典へ到達できていないため `ANALYSIS_SINGLE_FOR_INSPECTION_CODE` として保存。
confidence: INDUSTRY_HIGH_FOR_MODEL / ANALYSIS_SINGLE_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- 1: 97.8%
- 2: 98.6%
- 3: 101.5%
- 4: 105.4%
- 5: 108.6%
- 6: 111.1%
initialHitBySetting:
- setting1: BONUS 1/249.7
- setting2: BONUS 1/245.6
- setting3: BONUS 1/228.4
- setting4: BONUS 1/207.3
- setting5: BONUS 1/193.4
- setting6: BONUS 1/183.1
baseGamesPer50: 約33.1G/50枚
netIncrease: 疑似ボーナス 約6.0枚/G（一部約4.7枚/G）
basicPayout:
- HYPER BIG BONUS: 約400枚
- BIG BONUS: 約245枚
- REGULAR BONUS: 約87枚
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- MISSION: 1～3G継続。成功でボーナス当選、平均期待度約24%。
- 通常ゲーム数天井: 最大900G+αでボーナス。
- 規定ゲーム数100G / 250G / 450G / 600G到達時はMISSION高確獲得濃厚。250Gは高確G数優遇。
- MISSION高確中はMISSION当選が約1/12。
- REG3連後の次回4回目ボーナスはBIG以上濃厚と複数攻略資料で整理される。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNPUBLISHED_RESET_DISTRIBUTIONS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 通常900G+αのゲーム数天井を600G+αへ短縮。
- 通常時の内部ゲーム数をランダム加算。
- MISSION高確G数を再抽選。
- MISSIONスルー回数をRESET。
- 開始ステージは昼。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は天井ゲーム数、内部通常ゲーム数、MISSION高確、MISSIONスルー回数、有利区間をCARRY_OVERする扱い。
- 純電源OFF→ON比較情報と整合。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみでは天井ゲーム数をCARRY_OVER。
- 通常ゲーム数、MISSION高確、MISSIONスルー回数、有利区間もCARRY_OVER。
- ステージ表示は設定変更時と同じ昼へ復帰するため、見た目だけでは変更判別不可。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更時: RESET。ただしリセット直後に内部ゲーム数をランダム加算するため、見かけの0Gと内部進行が一致しない。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時: 最大900G+α。
- 設定変更時: 最大600G+αへ短縮。
- さらに内部ゲーム数ランダム加算があるため、実際の到達は表示600Gより早まる可能性がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- ATモードというより、MISSION高確G数と内部通常G数を再構築するリセット仕様。
- 設定変更時にMISSION高確G数抽選あり。
- 設定変更専用の内部ゲーム数ランダム加算振り分け、MISSION高確G数振り分けは、検索語・型式名・メーカー名を変えて再探索しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更時はMISSION高確G数を再抽選。
- 電源OFF→ON時はMISSION高確を引き継ぐ。
- 高確中はMISSION当選約1/12。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時に有利区間RESET。
- なな徹は現時点で判明している有利区間リセットタイミングを設定変更時のみと整理。
- 純電断では有利区間CARRY_OVER。
confidence: ANALYSIS_HIGH

### resetBenefits
- 天井が900G+α → 600G+αへ短縮。
- 内部通常ゲーム数をランダム加算するため、天井・規定G MISSION高確へ早く到達できる可能性。
- MISSION高確G数の初期抽選あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時も純電断時も昼ステージ開始のため、開始ステージでは判別不可。
- 内部Gランダム加算により100/250/450/600GのMISSION高確発生位置がズレるため、規定位置のズレだけで据え置き確定にはならない。
- 朝一600Gを超えてもボーナス非当選なら、設定変更時天井と矛盾するため据え置き濃厚材料。
- 本機固有のリールガックン条件・発生率は機種名/型式/メーカー＋ガックン/設定変更/リセット/据え置き/電源OFF ONで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_AND_CEILING_DETECTION / UNVERIFIED_FOR_GACKUN

### numericResetData
- 通常天井: 900G+α。
- 設定変更時天井: 600G+α。
- 規定ゲーム数MISSION高確: 100G / 250G / 450G / 600G（設定変更時はランダム加算で見かけ上ズレる）。
- MISSION高確中MISSION当選: 約1/12。
- リセット時内部Gランダム加算振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- リセット時MISSION高確G数振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 天井短縮: 900G+α → 600G+α。
- 朝一内部Gランダム加算あり（振り分け非公開）。
- 朝一MISSION高確G数抽選あり（振り分け非公開）。
- 高確滞在中MISSION当選: 約1/12。

## conflicts
- 一部期待値記事では計算上の天井を920Gとしているが、解析上の公称天井は900G+α。計算用仮定と解析値を混同せず、canonicalは900G+α。
- 純増は基本約6.0枚/Gだが一部区間約4.7枚/Gとの資料があるため、単一数値へ潰さず併記。

## missingFields
- reset internal-game random-add distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset MISSION-high game-count distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- inspectionCode public-primary-source confirmation: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2023-12-18群のcanonical候補3機をすべて処理済み。
- No.1613 `スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION`、No.1614 `ドラゴンハナハナ～閃光～-30`、本機No.1615。
- ALL7月間一覧と個別導入DBで3機一致。PB・別型式・地域先行・延期/段階導入を再監査し、現時点で追加canonical新規機は確認できず `2023-12-18_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED` とする。

## sources
取得日: 2026-09-13
- ALL7 2023年12月導入予定一覧: https://www.all7.jp/plans/index/2023/12
- 遊技日本 サミー発表/型式/基本仕様: https://news.p-world.co.jp/articles/25434/nippon
- 遊技日本 詳細発表: https://news.p-world.co.jp/articles/25497/nippon
- グリーンべると 新機種発表/ベース・純増: https://news.p-world.co.jp/articles/25440/greenbelt
- パチビー 基本スペック/導入日: https://www.pachibee.jp/machines/index/223110003
- K-Navi 設定別初当り/機械割: https://p-kn.com/slot/4036/
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/648/18393/
- なな徹 MISSION高確/規定ゲーム数: https://nana-press.com/kaiseki/machine/648/18395/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_firedrift/3/
- ぽこすろっと 設定変更/電断比較: https://www.nankaikoya.jp/firedrift-kitaichi/
- イチカツ 設定変更/電断比較補助: https://itikatu.jp/firedrift/
- Ativo 型式/検定番号: https://ativo.jp/2023/10/02/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%89%E3%83%AA%E3%83%95%E3%83%88/

## notes
- リセット時内部G加算/高確G数の全振り分けは公開固定値を確認できないため推測しない。
- 通常時の全抽選・全モードを収集せず、朝一客行動に影響する規定Gとリセット差だけを保存。
