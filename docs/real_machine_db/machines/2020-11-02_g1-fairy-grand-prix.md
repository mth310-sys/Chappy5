# ～ガールズケイリン～GⅠフェアリーグランプリ

No: 1373
machineName: ～ガールズケイリン～GⅠフェアリーグランプリ
machineNameVariants: G1フェアリーグランプリ / GIフェアリーグランプリ / SGⅠフェアリーグランプリKP
manufacturer: コナミアミューズメント
releaseDate: 2020-11-02
formalModelName: SGⅠフェアリーグランプリKP
certificationNumber: 0S0606

generation: 6号機
systemType: AT / 周期抽選+CZ / 差枚ではなくG数管理AT / 擬似ボーナス / 有利区間管理

## identity / release
- コナミアミューズメント発売。業界記事・P-WORLD・複数解析で2020-11-02ホール導入開始を確認。
- 東京都公安委員会検定通過情報で `SGⅠフェアリーグランプリKP` / 検定番号 `0S0606` を確認。
- 先行して `SGIフェアリーグランプリKG` / 0S0499 も検定通過しているが、市場導入実機はKP表記を実店舗資料・後年流通資料でも確認したためKPをcanonicalとする。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.8% |
| 3 | 100.7% |
| 4 | 104.3% |
| 5 | 106.1% |
| 6 | 108.0% |
- ちょんぼりすた、SLOT HACK、ぱちんこキュレーション等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
CZ「決勝レース / ウイニングチャンス」:
| 設定 | CZ初当たり |
|---:|---:|
| 1 | 1/199 |
| 2 | 1/198 |
| 3 | 1/197 |
| 4 | 1/196 |
| 5 | 1/195 |
| 6 | 1/194 |

AT「GK DREAM」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/924 |
| 2 | 1/875 |
| 3 | 1/789 |
| 4 | 1/682 |
| 5 | 1/631 |
| 6 | 1/573 |
- 複数解析で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約52G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- メインAT「GK DREAM」: 約2.6枚/G。
- 擬似ボーナスおよび完走確定後の一部区間: 約4.0枚/G。
- 機種概要で「2.6～4.0枚/G」とされるため、単一純増値に丸めず区間定義を分離。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「GK DREAM」突入時の期待獲得枚数: 約700枚。
- GK BONUS: 20～100G、約80～400枚。
- PREMIUM GK BONUS: 10G、約40枚。高確率でGK BONUSをストックし、平均ストック約4個という公開資料あり。
- ATは継続シナリオ管理で、5セット到達時は完走濃厚とする解析あり。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はスゴロク形式の周期抽選。目的地到達までが1周期。
- ゲーム数天井: 有利区間移行後499G+αでCZ「ウイニングチャンス」。
- 周期天井: 最大8周期。8周期目の予選レース到達時はAT当選まで確約する解析あり。
- 周期天井は有利区間開始時に振り分け。公開振り分け: 1周期1.2% / 2周期0.4% / 3周期25.0% / 4周期0.4% / 5周期1.2% / 6周期0.4% / 7周期25.0% / 8周期46.5%。
- 1周期目のCZ当選率（予選突破率表現を含む）は約30%以上とする解析あり。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CORE_RESET_CONTRACT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井RESET。
- 有利区間RESET。
- 朝一は神社ステージから開始する公開解析あり。
- 周期天井は有利区間開始時に新規振り分けされるため、設定変更後も新たな有利区間の周期天井抽選を受ける。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時の内部契約について、純電源OFF→ON時と分けた独立表を直接固定できる資料は不足。
- 設定変更を伴わない据え置きは電断側挙動と同義として扱う解析が一般的だが、本レコードでは推測補完せず、天井・有利区間の直接契約は `UNVERIFIED_AFTER_RESEARCH` とする。
- reliability: UNVERIFIED

### powerCycleBehavior
- 純電源OFF→ON時は天井CARRY_OVER。
- 有利区間CARRY_OVER。
- 朝一は設定変更時と同じく神社ステージから開始。
- 内部状態・育成進行・サイコロ保留等の完全な個別引継ぎ契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_PARTIAL

### gameCounterReset
- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`（純電断相当と推測せず明示保留）。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 新規有利区間で通常のゲーム数天井499G+α、および周期天井最大8周期を適用。
- 周期天井は有利区間開始時に1～8周期へ振り分けられる。

### modeAfterReset
- 本機は周期天井を有利区間開始時に新規振り分け。
- 設定変更専用の別モードテーブル、朝一専用モード振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 周期天井振り分けは設定変更専用ではなく有利区間開始時共通値として保持。

### stateAfterReset
- 朝一の液晶は設定変更・純電断とも神社ステージ。
- 神社ステージ中は育成レベルに関わる抽選が行われ、スゴロク移行時に帯色が育成レベルへ反映される。
- 設定変更時/据え置き/純電断時の内部育成状態・ポイント・サイコロ保留等の完全な状態契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。
- 据え置き独立記載: `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 新規有利区間開始により周期天井を再抽選。
- 周期天井は3周期・7周期が各25.0%、8周期46.5%。ただしこれは設定変更専用振り分けではなく有利区間開始時共通値。
- 1周期目はCZ当選率/予選突破率約30%以上とする解析があるが、これも設定変更専用値ではない。
- 設定変更専用のAT確定、固定天井短縮、専用初当たり優遇は確認できず。

### resetPenalties
- 設定変更で既存の天井進行・有利区間が消去される。
- 設定変更専用の定量的不利要素は `NONE_DIRECTLY_PUBLISHED`。

### resetDetection
- 朝一は設定変更・純電源OFF→ONのどちらでも神社ステージ開始のため、液晶ステージ単独では判別不可。
- 有利区間ランプ位置はPAYOUT右下ドットとする解析あり。
- 通常時のランプ点灯契約と朝一ランプによる確定的な変更判別法は当時資料でも「調査中」が残り、`UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のリールガックン条件/発生率も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更専用の公開朝一数値: `PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_NOT_FOUND_AFTER_RESEARCH`。
- 参考・有利区間開始時共通の周期天井振り分け: 1周期1.2% / 2周期0.4% / 3周期25.0% / 4周期0.4% / 5周期1.2% / 6周期0.4% / 7周期25.0% / 8周期46.5%。
- 1周期目CZ当選率/予選突破率: 約30%以上（通常の1周期目仕様であり朝一専用値ではない）。

## resetBehavior 再探索メモ
2026-09-11。`～ガールズケイリン～GⅠフェアリーグランプリ / G1フェアリーグランプリ / GIフェアリーグランプリ / SGⅠフェアリーグランプリKP / コナミアミューズメント` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 引き継ぎ / モード / 周期 / 神社ステージ / ガックン / 有利区間 / 有利区間ランプ` を組み替え、コナミ関連ページ、遊技通信、P-WORLD、1geki、ちょんぼりすた、期待値見える化、すろぱちクエスト、パチ7、SLOT HACK、ぱちんこキュレーション、旧解析記事・後年DBを横断。設定変更/電断の天井・有利区間差、朝一神社ステージ、周期天井共通値は固定できた。据え置き独立契約、内部育成状態・保留の完全引継ぎ、本機固有ガックン、設定変更専用数値は十分な再探索後も直接固定できないため推測補完せずUNVERIFIED。

## conflicts
- formalModel: `SGIフェアリーグランプリKG`（検定番号0S0499）が先に検定通過し、後に`SGⅠフェアリーグランプリKP`（0S0606）が通過。2020年11月の実店舗・流通資料でKPを確認したため市場導入型式はKPをcanonical、KGは先行検定型式として保持。
- netIncrease: 資料に「約4.0枚/G」「約2.6～4.0枚/G」「平均3.3枚」表現あり。メインAT約2.6枚/G、擬似ボーナス/完走後区間約4.0枚/Gという区間差で説明可能なため、数値を平均せず定義分離。
- ceilingExpression: 一部資料は「499G+αまたは8周期でCZ」、別資料は8周期目到達でAT確約まで記載。ゲーム数天井はCZ、8周期目は周期天井として別定義で保持。

## sources
取得日: 2026-09-11

1. 遊技通信web / 東京都公安委員会検定通過状況
   - https://www.yugitsushin.jp/news/maker/20200908-1435kentei/
   - `SGⅠフェアリーグランプリKP`、検定番号`0S0606`を確認。
   - reliability: INDUSTRY
2. P-WORLD / 遊技日本 業界ニュース
   - https://news.p-world.co.jp/articles/15133/nippon
   - 2020-11-02からホール導入開始を確認。
   - reliability: INDUSTRY
3. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9246
   - メーカー、6号機AT、擬似ボーナス、純増、基本獲得性能を確認。
   - reliability: DATABASE_HIGH
4. ちょんぼりすた
   - https://chonborista.com/slot/konami-slot/119531/
   - 設定別出玉率/CZ/AT、ベース、純増区間、天井、設定変更/電断の天井・有利区間挙動、神社ステージを確認。
   - reliability: ANALYSIS_HIGH
5. 1geki
   - https://1geki.jp/slot/s_gk_g1fg/3/
   - 499G+α天井、8周期、当時時点で設定変更/電断の状態等が調査中だったことを確認。
   - reliability: ANALYSIS_HIGH
6. 期待値見える化だくお
   - https://note.com/dakuo_slot/n/n7834ecd79f17
   - 朝一は設定変更・電断とも神社ステージ、ランプ位置、1周期目約30%を確認。
   - reliability: ANALYSIS_HIGH
7. パチ7 通常時解析
   - https://pachiseven.jp/machines/6151/cutout/6
   - 有利区間開始時の周期天井振り分け、8周期目到達時AT当選を確認。
   - reliability: ANALYSIS_HIGH
8. ぱちんこキュレーション
   - https://pachinko-curation.com/13070/
   - 導入日、型式KP、スペック、純増、ベースを照合。先行KG型式も確認。
   - reliability: ANALYSIS_SINGLE
9. SLOT HACK
   - https://slothack.net/matome/14856/
   - 導入日、設定別AT/CZ、機械割を照合。
   - reliability: ANALYSIS_SINGLE
10. PiDEA X
   - https://www.pidea.jp/articles/1599546573
   - コナミアミューズメント発売、純増約4枚の区間・ゲーム性・2020年11月導入予定を確認。
   - reliability: INDUSTRY
