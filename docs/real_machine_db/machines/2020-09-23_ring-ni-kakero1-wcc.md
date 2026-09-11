# PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編

No: 1371
machineName: PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編
machineNameVariants: リングにかけろ1 WCC / リンかけ1 / Sリングにかけろ1 / S RK1 WCC編YB
manufacturer: スパイキー（開発系表記: エンターライズ）
releaseDate: 2020-09-23
formalModelName: S RK1 WCC編YB
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6号機
systemType: AT / 差枚数管理 / 周期・CZ経由 / 有利区間管理

## identity / release
- 型式 `S RK1 WCC編YB`、6号機ATを複数資料で確認。
- 導入日は資料競合あり。ちょんぼりすた、なな徹機種一覧、期待値見える化、当時実戦記録では2020-09-23。グリーンべるとの発表時資料は納品10/4予定、すろぱちクエスト等は10/5導入表記。
- 2020-09-23当日に実店舗データ上で本機稼働が確認できるため、本DBでは実導入のcanonicalを2020-09-23とする。10/4～10/5は予定/段階導入差としてCONFLICT保持。
- reliability: INDUSTRY / ANALYSIS_HIGH / CONFLICT

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.0% |
| 3 | 100.8% |
| 4 | 104.5% |
| 5 | 107.0% |
| 6 | 110.1% |
- ちょんぼりすた、期待値見える化、当時解析で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「チャンピオンロード」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/499.4 |
| 2 | 1/476.5 |
| 3 | 1/462.5 |
| 4 | 1/424.6 |
| 5 | 1/416.9 |
| 6 | 1/381.3 |
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT純増 約3.1枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「チャンピオンロード」は差枚数管理型。
- 初期枚数は100～250枚の公開表記がある。
- 通常時は1周期50G、100pt到達でCZ勝率/報酬を強化し、未到達時はCZ「ギリシアバトル」へ移行するゲーム性。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時天井は999G+α。到達時はAT「チャンピオンロード」当選、青7優遇の公開解析あり。
- 設定変更後/CZ・AT終了後の竜児勝率は50%スタートと当時解析で公開。
- 1周期目は内部状態が超高確、2周期目は通常以上という解析あり。ただしこれは設定変更専用とは限らないためreset専用数値には混入しない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_DETECTION_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は有利区間RESETとみなされ、天井進行はRESET。
- 竜児勝率は50%から開始する公開解析あり。
- 朝一最初のCZでは「真ギリシアバトル」が表面上発生しない特徴が攻略資料で報告されている。ただし内部的に真ギリシア相当の場合は青7恩恵へ置換されるとの解析があり、判別材料は条件付き。
- reliability: ANALYSIS_SINGLE / ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時の天井G・周期内進行・アイコン/竜児勝率の完全な公開引継ぎ契約は、表記揺れ・型式名・メーカー名・据え置き/電断/朝一/天井/有利区間を変えた再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプは通常時基本消灯のため、朝一ランプだけでは据え置き判別不可。

### powerCycleBehavior
- 純電源OFF→ONのみの天井G・周期・アイコン・竜児勝率について、本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更挙動からの推測転記は行わない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井999G+α。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後に999G以外へ固定短縮される公開契約は確認できない。

### modeAfterReset
- 本機は周期/CZ強化型で、旧来のA/B等の朝一専用モード表は確認なし。
- 設定変更後の竜児勝率は50%スタート。
- 設定変更専用の全周期/アイコン振り分けは `PUBLIC_TABLE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更後の竜児勝率50%を確認。
- 1周期目超高確などの周期状態は公開されるが、設定変更専用挙動かAT/CZ後共通挙動かを分離できないためreset専用値として固定しない。
- 据え置き/電断時の内部状態は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 通常時の有利区間ランプは基本消灯タイプ。
- よって朝一ランプ消灯だけでは設定変更判別不可。

### resetBenefits
- 竜児勝率50%スタート。
- 設定変更専用固定天井短縮、朝一専用CZ保証などは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 朝一最初のCZで表面上「真ギリシアバトル」が発生しないという攻略解析あり。ただし内部真ギリシア相当時は青7恩恵に置換されるため、単純な不利とは断定しない。
- 定量的な設定変更専用不利は `NONE_DIRECTLY_PUBLISHED`。

### resetDetection
- 通常時有利区間ランプが基本消灯のため、ランプによるリセット判別不可。
- 朝一1回目CZで「真ギリシアバトル」が出現した場合は据え置き方向の強い材料とする解析があるが、当時資料自体に事実関係調査中の注記があり確定判別にはしない。
- 本機固有のリールガックン発生条件/発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更後/CZ・AT終了後の竜児勝率初期値: **50%**。
- 通常天井: **999G+α**。
- 設定変更専用の公開短縮天井数値: **NONE_CONFIRMED**。

## resetBehavior 再探索メモ
2026-09-11。`リングにかけろ1 / リンかけ1 / ワールドチャンピオンカーニバル / WCC / S RK1 WCC編YB / スパイキー / エンターライズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 竜児勝率 / 真ギリシア / ガックン / 有利区間 / 有利区間ランプ` を組み替え、グリーンべると、1geki、なな徹系検索、パチマガ系、ちょんぼりすた、期待値見える化、すろぱちクエスト、古い解析整理を横断。設定変更時の天井RESET・竜児勝率50%・ランプ判別不可までは固定。純電断/据え置き時の詳細引継ぎ契約とガックンは直接固定できず推測補完しない。

## conflicts
- releaseDate: **2020-09-23 vs 2020-10-05**。2020-09-23表記は複数解析・機種一覧・当日店舗稼働実績で裏付け。2020-10-05は発表時の10/4納品予定や一部解析カレンダーに残る。canonicalは実稼働を優先して2020-09-23。
- manufacturerLabel: 製造/ブランドでスパイキー、開発/機種ページでエンターライズ表記が混在。型式は `S RK1 WCC編YB`。
- certificationNumber: 高信頼な直接番号を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-11

1. グリーンべると（発表時資料）
   - https://web-greenbelt.jp/post-40136/
   - スパイキー製、納品10/4予定、ゲーム性を確認。
   - reliability: INDUSTRY
2. ちょんぼりすた
   - https://chonborista.com/slot/enta-slot/117258/
   - 型式、設定別AT/出玉率、ベース、純増、天井、有利区間ランプ、朝一CZ特徴を確認。
   - reliability: ANALYSIS_HIGH
3. 期待値見える化（当時記事）
   - https://note.com/dakuo_slot/n/n1c0c553572f4
   - 2020-09-23、ベース約50G、純増3.1枚/G、天井999G、朝一ランプ判別不可、竜児勝率50%を確認。
   - reliability: ANALYSIS_HIGH
4. なな徹 機種一覧
   - https://nana-press.com/kaiseki/index/machine/s/ra/
   - 2020-09-23導入表記を照合。
   - reliability: ANALYSIS_HIGH
5. パチマ（型式DB）
   - https://www.pachima.com/c/slot/s_28sonota/S00518
   - 型式 `S RK1 WCC編YB`、2020-09-23表記を照合。
   - reliability: DATABASE_SECONDARY
6. すろぱちクエスト
   - https://www.slopachi-quest.com/article/rinkake-world-tenjou/
   - 2020-10-05表記をCONFLICT根拠として保持。
   - reliability: ANALYSIS_SINGLE
