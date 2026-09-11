# 戦国コレクション4

No: 1364
machineName: 戦国コレクション4
machineNameVariants: 戦国コレクション4 / 戦コレ4 / S戦国コレクション4KF
manufacturer: コナミアミューズメント
releaseDate: 2020-08-17
formalModelName: S戦国コレクション4KF
certificationNumber: 0S0139

generation: 6.1号機
systemType: AT / 高純増ストレートAT / 規定コレポイント管理 / シナリオ管理型

## identity / release
- コナミアミューズメント公式アーカイブで「戦国コレクション4」、2020年8月稼働開始、6.1号機ATを確認。
- 東京都公安委員会検定通過情報（遊技通信/P-WORLD）で型式 `S戦国コレクション4KF`、コナミアミューズメント、検定番号 `0S0139` を確認。
- グリーンべると、HAZUSE、複数攻略資料でホール導入開始2020-08-17が一致。
- reliability: OFFICIAL / INDUSTRY

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.3% |
| 3 | 100.5% |
| 4 | 104.1% |
| 5 | 108.3% |
| 6 | 110.2% |
- HAZUSE、イチカツ、すろぱちくえすと等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
チャンスAT「夢幻の間」初当たり:
| 設定 | 夢幻の間 |
|---:|---:|
| 1 | 1/399.4 |
| 2 | 1/392.9 |
| 3 | 1/381.8 |
| 4 | 1/362.0 |
| 5 | 1/337.1 |
| 6 | 1/241.6 |

コレポイント獲得ゾーン「鬼ヶ島チャレンジ」:
| 設定 | 鬼ヶ島チャレンジ |
|---:|---:|
| 1 | 1/213.4 |
| 2 | 1/212.5 |
| 3 | 1/209.6 |
| 4 | 1/205.5 |
| 5 | 1/200.9 |
| 6 | 1/211.5 |
- HAZUSE、P-WORLD、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.5G/50枚（設定1基準）。
- HAZUSE、なな徹、イチカツ、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「夢幻の間」「夢幻海ラッシュ」: 約10枚/G。
- コナミ公式アーカイブは6.1号機ATを確認、グリーンべると/P-WORLD/HAZUSE等が純増約10枚/Gを一致して掲載。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- チャンスAT「夢幻の間」: 10G+α、純増約10枚/G。
- メインAT「夢幻海ラッシュ」: 1セット20G+α（継続バトル込み）、純増約10枚/G、シナリオ管理型。
- 7セット継続でエンディング到達の大チャンス。
- 固定獲得枚数管理ではないため、物差し値として単一の基本獲得枚数へ換算しない。

## modeSpecificMinimumData
- 通常時はコレポイントで規定到達を管理。最大1216コレで「夢幻の間」へ到達。
- 内部モードは通常A / 通常B / 通常C / 天国。
- モード別最大規定コレ: 通常A 1216 / 通常B 768 / 通常C 992 / 天国 256コレ。
- 993コレ以上で当選した場合、後続解析ではAT当選時の完走シナリオ選択率約90%という性能優遇が報告される。ただし夢幻の間突破との関係が資料上完全に明瞭ではないため、天井そのものの確定獲得恩恵とは分離する。
- 「鬼ヶ島チャレンジ」は15G+αのコレポイント獲得ゾーン。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井/規定コレ進行RESET。
- 内部状態RESET。
- 有利区間を新規開始する契機となり、モード移行抽選を行う。
- 朝一はカードステージから開始。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は内部天井/規定コレ進行をCARRY_OVER。
- 内部状態をCARRY_OVER。
- 朝一の液晶は据え置きでもカードステージから開始するため、カードステージ開始だけでは変更判別不可。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは天井/規定コレ進行CARRY_OVER。
- 内部状態CARRY_OVER。
- 朝一ステージはカードステージ。
- 主要朝一資料では有利区間ランプは設定変更時/電断時とも消灯と整理され、通常時も基本消灯タイプのため、単純な消灯だけでは変更判別不可。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 天井管理はデータカウンタG数ではなく液晶側コレポイントが基準。

### ceilingAfterReset
- 設定変更後は規定コレをゼロ基準から再スタート。
- 最大規定コレは通常A 1216、通常B 768、通常C 992、天国256コレ。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後のモード再抽選で天国が選ばれれば最大256コレとなるが、これは固定短縮天井ではない。

### modeAfterReset
- 設定変更時はモード移行抽選を実施し、新規モードを決定する。
- パチ＆スロ必勝本はカードステージを「モード移行抽選が行われたタイミング」に入るステージとし、設定変更時をそのタイミングの一つとして明記。
- 後発解析では設定変更後（有利区間リセット後）の天国移行率を **約25%** とする公開値あり。
- 一方、「天国移行率は設定1でも33%以上」とする資料は通常時全般/モード移行全体の説明であり、設定変更専用値とは定義が違うため混同しない。
- 設定変更時の通常A/B/C/天国の完全振り分け表は今回の再探索で固定できず `PARTIAL_PUBLIC_TABLE`。
- reliability: ANALYSIS_SINGLE for reset-specific ~25%; ANALYSIS_HIGH for mode re-lottery timing

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 有利区間移行時は内部高確フラグの抽選契機でもあるが、設定変更専用の高確開始率は固定できず推測補完しない。

### advantageousSectionReset
- 設定変更: 有利区間RESET / 新規有利区間開始契機。
- 据え置き / 純電源OFF→ON: 内部進行を引き継ぐのが朝一解析の基本契約。
- 通常時の有利区間ランプは基本消灯タイプで、朝一消灯だけではリセット判別不可。
- 有利区間移行時のランプ点灯率: 通常A 約0.4%、通常B/通常C/天国 約6.3%。

### resetBenefits
- 設定変更後はモードを新規抽選。
- 後発解析では設定変更後の天国モード移行率約25%が公開されており、天国なら最大256コレ。
- 一律の短縮天井や設定変更専用AT直撃保証は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置きで保持される前日の規定コレ/内部状態を設定変更では失うが、設定変更専用の定量的不利要素として公開された値は確認できない。

### resetDetection
- 朝一は設定変更/据え置きともカードステージから開始するため、カードステージそのものは判別材料にならない。
- 朝一に水墨画ステージが出現した場合、非有利区間経由＝設定変更濃厚とする攻略資料あり（前日0Gヤメ等の例外あり）。
- 通常時は有利区間ランプ基本消灯型のため、朝一消灯だけでは判別不可。
- 朝一ランプ点灯は据え置き濃厚とする攻略整理があるが、有利区間移行時にもモード別で点灯抽選があるため絶対判別にはしない。
- 本機固有のガックン条件・発生率は `戦国コレクション4 / 戦コレ4 / S戦国コレクション4KF / コナミアミューズメント / KPE` と `ガックン / 設定変更 / 朝一 / リール / 据え置き` を組み替えて再探索したが高信頼契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更後（有利区間リセット後）の天国モード移行率: **約25%**（後発解析・単一系統）。
- 有利区間移行時のランプ点灯率:
  - 通常A: **約0.4%**
  - 通常B: **約6.3%**
  - 通常C: **約6.3%**
  - 天国: **約6.3%**
- モード別最大規定コレ: A 1216 / B 768 / C 992 / 天国256。
- 設定変更専用固定短縮天井: NONE_CONFIRMED。
- 設定変更専用の高確開始率/ガックン発生率: UNVERIFIED_AFTER_RESEARCH。

## resetBehavior 再探索メモ
2026-09-11。`戦国コレクション4 / 戦コレ4 / S戦国コレクション4KF / コナミアミューズメント / KPE` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 規定コレ / 内部状態 / モード / モード振り分け / ガックン / 有利区間 / 有利区間ランプ / 水墨画` を組み替え、コナミ公式、業界検定記事、グリーンべると、P-WORLD、HAZUSE、パチマガスロマガ、パチ＆スロ必勝本、なな徹、ちょんぼりすた、スロットセブン、すろぱちくえすと、期待値見える化だくお等を横断。天井/内部状態のRESET・CARRY_OVER、設定変更時モード移行抽選、朝一カードステージ、ランプ判別制約、水墨画判別、リセット後天国約25%まで固定。設定変更時の全モード振り分け、専用高確率、本機固有ガックン条件/率は未固定のため推測補完しない。

## conflicts
- メーカー表記について、一部攻略ページに `KPE` 表記があるが、コナミアミューズメント公式アーカイブ・検定通過資料・グリーンべると・P-WORLDは `コナミアミューズメント` で一致するためcanonicalはコナミアミューズメント。KPE表記はシリーズ旧来ブランド由来の二次表記として扱う。
- 天国移行率の `設定1でも33%以上` は通常時全般のモード移行説明。一方、設定変更後専用値として後発解析に `約25%` がある。定義が異なるためCONFLICTとして平均化せず、resetBehaviorでは設定変更専用約25%のみを採用。

## missingFields
- 設定変更時の通常A/B/C/天国の完全モード振り分け表: PARTIAL_PUBLIC_TABLE。
- 設定変更専用の内部高確開始率: UNVERIFIED_AFTER_RESEARCH。
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-11

1. コナミアミューズメント 機種アーカイブ「戦国コレクション4」
   - https://www.konami.com/amusement/psm/archive/ps/2020/sengokucollection4/
   - 2020年8月稼働開始、6.1号機ATを確認。
   - reliability: OFFICIAL
2. 遊技通信 / P-WORLD「東京都公安委員会検定通過状況（4月27日）」
   - https://news.p-world.co.jp/articles/13465/yugitsushin
   - 型式 `S戦国コレクション4KF`、コナミアミューズメント、検定番号 `0S0139`。
   - reliability: INDUSTRY
3. グリーンべると「【8/17導入】パチスロ『戦国コレクション4』」
   - https://web-greenbelt.jp/post-40479/
   - 2020-08-17導入、メーカー、純増約10枚/G、夢幻の間10G+α、夢幻海ラッシュ1セット20G+α。
   - reliability: INDUSTRY
4. HAZUSE「戦国コレクション4」
   - https://hazuse.com/machine/pachislot/0S0139/
   - 型式/検定、導入日、設定別出玉率、夢幻の間/CZ確率、約51.5G/50枚、純増。
   - reliability: ANALYSIS_HIGH
5. P-WORLD 機種DB「戦国コレクション4」
   - https://www.p-world.co.jp/machine/database/9204
   - メーカー、仕様、AT基本性能、設定別CZ/夢幻の間確率、最大1216コレ。
   - reliability: INDUSTRY_DB / ANALYSIS
6. すろぱちくえすと「戦国コレクション4 設定差まとめ」
   - https://www.slopachi-quest.com/article/sengoku-collection4-settei/
   - 設定別CZ/夢幻の間/機械割、ベース、純増。
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた「戦国コレクション4」
   - https://chonborista.com/slot/konami-slot/111474/
   - 天井/内部モード、設定変更・電源OFF→ON比較、内部状態、有利区間ランプ、993コレ以降の性能。
   - reliability: ANALYSIS_HIGH
8. スロットセブン「戦国コレクション4 天井・朝一解析」
   - https://slot-seven.com/sengokucollection4-tenzyou/
   - 設定変更/電断時の天井・内部状態・ランプ・ステージ、有利区間ランプ点灯率。
   - reliability: ANALYSIS_HIGH
9. すろぱちくえすと「戦国コレクション4 天井解析」
   - https://www.slopachi-quest.com/article/sengoku-collection4-tenjou/
   - 水墨画ステージによる朝一非有利区間示唆、ランプ判別制約、点灯率。
   - reliability: ANALYSIS_HIGH
10. パチ＆スロ必勝本「カードステージ中の演出」
   - https://p.hisshobon.jp/machine/3529/1/78771
   - モード移行抽選タイミングとして設定変更時を明記、カードステージのモード示唆。
   - reliability: ANALYSIS_HIGH
11. 期待値見える化だくお「戦国コレクション4 設定判別・天井」
   - https://note.com/dakuo_slot/n/n1b4120a6f071
   - 設定変更後（有利区間リセット後）の天国移行率約25%、有利区間ランプ点灯率、カードステージ。
   - reliability: ANALYSIS_SINGLE
12. パチマガスロマガ「通常時の内部モード」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/12/tj04.php
   - モード別最大規定コレ、通常時全般の天国移行率に関する参考値。
   - reliability: ANALYSIS_HIGH
