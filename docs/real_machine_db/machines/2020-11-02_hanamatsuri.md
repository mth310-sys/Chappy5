# 華祭

No: 1376
machineName: 華祭
machineNameVariants: S華祭 / 華祭-ハナマツリ- / ハナマツリ
manufacturer: パイオニア
releaseDate: 2020-11-02
formalModelName: SハナマツリSP
certificationNumber: UNVERIFIED

generation: 6号機
systemType: AT / 擬似ボーナス / 完全告知 / 完全レバー抽選 / ハイブリッドAタイプ

## identity / release
- パイオニアの2020年9月オンライン発表会を報じた複数業界記事で、納品11月1日・ホール導入11月2日予定を確認。
- 検定通過資料・機種DBで型式名 `SハナマツリSP` を確認。
- 25Φ市場向け「Attack25～百華繚乱プロジェクト～」第5弾。
- reliability: INDUSTRY / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.0% |
| 3 | 101.2% |
| 4 | 103.8% |
| 5 | 105.5% |
| 6 | 108.0% |
- 1geki、P-WORLD、複数解析/DBで一致。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/316.4 | 1/458.9 | 1/187.3 |
| 2 | 1/296.7 | 1/448.6 | 1/178.6 |
| 3 | 1/272.2 | 1/422.9 | 1/165.6 |
| 4 | 1/245.3 | 1/403.3 | 1/152.5 |
| 5 | 1/229.5 | 1/386.9 | 1/144.1 |
| 6 | 1/214.7 | 1/368.3 | 1/135.3 |
- 複数資料で一致。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

## baseGamesPer50
- 約50.8G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス: 約4.0枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG: 40G、約160枚。
- REG: 15G、約60枚。
- ボーナス中はBIG 1G連を抽選。
- 極BIG: BIG+BIG 1G連ストック2個以上が確定するプレミアム契機として案内されている。
- 10連到達時は2400枚獲得まで継続するエンディングボーナスへ移行する資料あり。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は完全レバー抽選で、CZ・ゲーム数解除・通常時の無抽選区間を持たないと業界発表で明記。
- 通常ゲーム数天井はなし。
- ハイビスカス点灯でボーナス。先告知約75%、次ゲーム告知約25%とする業界紹介あり。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_NO_NORMAL_CEILING
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 本機は通常ゲーム数天井・CZ・ゲーム数解除を持たない完全レバー抽選型のため、設定変更による「通常天井ゲーム数リセット」は適用対象外。
- 当時1gekiの設定変更表は「天井G数/状態とも現在調査中」のまま。
- 設定変更時の有利区間・1G連ストック等について本機固有の直接契約を十分な再探索後も固定できず、一般6号機仕様から推測しない。
- reliability: INDUSTRY_FOR_SYSTEM / UNVERIFIED_FOR_INTERNAL_RESET_CONTRACT

### carryOverBehavior
- 据え置き時の通常ゲーム数天井については天井自体がないため `NOT_APPLICABLE`。
- 前日ボーナス関連内部状態/1G連ストック等の据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 当時1gekiの電源OFF→ON表は「天井G数/状態とも現在調査中」。
- 通常ゲーム数天井は存在しないためゲーム数引継ぎ狙いは `NOT_APPLICABLE`。
- その他の本機固有内部状態の純電断CARRY_OVER/RESETは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井: `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`。
- 客側の朝一狙いに影響する天井ゲーム数のRESET/CARRY差はなし。

### ceilingAfterReset
- 通常時のゲーム数天井なし。
- 設定変更専用の短縮天井も `NOT_APPLICABLE`。
- reliability: INDUSTRY / ANALYSIS_HIGH

### modeAfterReset
- 通常時は完全レバー抽選で、CZ・ゲーム数解除を用いる通常モード管理型ではない。
- 設定変更専用朝一モード/モード振り分けの公開値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 当時解析は設定変更時/電源OFF→ON時とも「状態 調査中」。
- 後年資料を含めても本機固有の設定変更直後状態テーブルを固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 6号機AT機として有利区間制度の対象だが、本機固有の設定変更・据え置き・純電断時の有利区間RESET/CARRY_OVER契約を直接示す資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後継機「超華祭」の仕様を本機へ転用しない。

### resetBenefits
- 通常ゲーム数天井、CZ、ゲーム数解除がないため、公開されている短縮天井・朝一CZ・朝一モード優遇等の設定変更恩恵は `NONE_CONFIRMED`。
- 朝一0Gからのリセット狙いを成立させる公開定量値は確認できず。

### resetPenalties
- 設定変更専用の定量的不利要素は `NONE_DIRECTLY_PUBLISHED`。
- 1G連ストック等の前日状態消去/引継ぎは直接契約未固定のため推測しない。

### resetDetection
- 本機固有の有利区間ランプによる朝一変更判別、ガックン条件/発生率、初期出目等の設定変更判別法は `UNVERIFIED_AFTER_RESEARCH`。
- 完全告知のハイビスカス演出はボーナス告知であり、設定変更判別とは別扱い。

### numericResetData / publicMorningNumbers
- 設定変更専用の朝一当選率、専用モード振り分け、短縮天井、CZ優遇率等は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- 通常時ボーナス合算1/187.3～1/135.3は常時の設定別抽選値であり、朝一専用値ではない。

## resetBehavior 再探索メモ
2026-09-11。`華祭 / S華祭 / 華祭-ハナマツリ- / SハナマツリSP / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井なし / 天井短縮 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ / 1G連ストック` を組み替え、パイオニア発表会を扱うPiDEA・Amusement Japan・グリーンべると、1geki、P-WORLD、ちょんぼりすた、すろぱちクエスト、検定情報/後年DBを横断。通常時はCZ・ゲーム数解除・天井を持たない完全レバー抽選であることを業界記事から固定した。一方、当時1gekiの設定変更/電断表は状態等が調査中で、後発資料でも本機固有の有利区間・内部状態・ストックRESET/CARRY契約を直接固定できなかったため、一般則や2024年の後継「超華祭」から補完せずPARTIAL_RESEARCH_EXHAUSTEDとする。

## conflicts
- 導入台数は資料に約1,000台 / 約2,000台があるが、市場実績は現ミッション必須対象外のためコアへ採用しない。
- systemTypeは一部解析で `AT?` と疑問符付き表記だが、業界記事・P-WORLDは純増約4.0枚/GのATによる擬似ボーナス機として説明。本DBでは6号機AT/擬似ボーナスをcanonicalとする。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態RESET/CARRY契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き/純電断時の内部状態・1G連ストック契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の有利区間契約: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプ/ガックン等による変更判別: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用朝一数値: NO_PUBLIC_VALUE_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://1geki.jp/newmachinecalender/202011/
- https://1geki.jp/slot/s_hanamatsuri/
- https://1geki.jp/slot/s_hanamatsuri/3/
- https://pidea.jp/articles/1600841828
- https://amusement-japan.co.jp/article/detail/10001935/
- https://web-greenbelt.jp/post-41364/
- https://news.p-world.co.jp/articles/14696/greenbelt
- https://www.p-world.co.jp/machine/database/9254
- https://www.slopachi-quest.com/article/hana-matsuri/
- https://chonborista.com/slot/pionia-slot/120017/
- https://pachinko-curation.com/17564/
- https://p-media.info/post-25260/

confidenceSummary: core=INDUSTRY_ANALYSIS_HIGH; reset=PARTIAL_RESEARCH_EXHAUSTED; identity=INDUSTRY_DATABASE_HIGH; conflicts=EXPLICIT
