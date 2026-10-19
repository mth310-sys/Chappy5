# SLOTバジリスク～甲賀忍法帖～絆2

recordNo: 1334
machineName: SLOTバジリスク～甲賀忍法帖～絆2
machineNameVariants: バジリスク絆2 / バジ絆2 / S／甲賀忍法帖／LL
manufacturer: ミズホ
formalModel: S／甲賀忍法帖／LL
certificationNumber: 9S1461
releaseDate: 2020-02-17
generation: 6号機
systemType: AT / BC経由型 / シナリオ管理型セットAT

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.6% |
| 3 | 102.0% |
| 4 | 106.1% |
| 5 | 110.1% |
| 6 | 112.9% |

## initialHitBySetting
| 設定 | BC（通常時） | BT初当たり |
|---|---:|---:|
| 1 | 1/139.4 | 1/525.6 |
| 2 | 1/132.8 | 1/453.3 |
| 3 | 1/134.1 | 1/457.7 |
| 4 | 1/128.1 | 1/371.4 |
| 5 | 1/125.4 | 1/370.9 |
| 6 | 1/110.2 | 1/235.7 |

## baseGamesPer50
- canonical: 約50G/50枚。
- 別解析では約49.5G/50枚。丸め差として併記し、平均化しない。

## netIncrease
- AT「バジリスクタイム」純増: 約2.9枚/G。

## basicPayout
- 通常BC: 16G。
- エピソードBC: 30G。
- 月下閃滅: 20G。
- プレミアムBC: 30G。
- BT: 1セット約40G（追想の刻10G以上＋争忍の刻平均約30G）。

## modeSpecificMinimumData
- ゲーム数天井: 有利区間移行後800G消化（BC中を除く）で同色BC。
- 有利区間移行後、BCに一度も当選せず800G到達時はエピソードBC当選。
- BCスルー天井: 有利区間内で最大7スルー後、次回BC（8回目）でBT濃厚。多くのテーブルは6スルー後の次回BCでBTとなる。
- 通常モードテーブルは全16種。有利区間移行ゲームで抽選し、有利区間終了でリセット。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_SUPPORT_AND_PUBLIC_MODE_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **有利区間RESET**。
- 有利区間に紐づく800G天井・BCスルー回数もRESET。
- 新有利区間移行時に通常モードテーブルを再抽選。
- 有利区間移行時は内部状態の初期抽選も行う。高設定ほど高確以上開始が優遇され、超高確開始は設定5以上のみ確認されている。
- 変更後の通常液晶は基本的に甲賀卍谷から開始する資料がある。

### carryOverBehavior
- 据え置きは有利区間を維持するため、800G天井進行・BCスルー回数・通常モードテーブルを引き継ぐものとして扱う。
- 朝一の見た目ステージは設定変更時と同じ甲賀卍谷となる資料があり、ステージ単独では判別できない。

### powerCycleBehavior
- 電源OFF→ONのみ: **有利区間CARRY_OVER**。
- 天井G数・BCスルー回数もCARRY_OVER。
- 有利区間ランプは点灯状態を引き継ぐ資料あり。
- ステージは甲賀卍谷。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- 対象は有利区間累計G数およびBCスルー回数。サブ液晶で当該有利区間の累計G数・スルー回数を確認可能。

### ceilingAfterReset
- 設定変更専用の短縮天井は確認できない。
- RESET後は新有利区間として **800G**のゲーム数天井を再計測。
- BCスルー天井も0回から再計測。

### modeAfterReset
- 有利区間移行時に16種類の通常モードテーブルを再抽選。
- 偶数設定はモードCスタート系が優遇され、高設定ほどテーブル14・15が選択されやすい解析。
- これは設定変更専用ではなく、BT終了後・ゲーム数天井BC非BT後などを含む「有利区間移行時」共通契約として扱う。

### stateAfterReset
- 有利区間移行時に低確/高確/超高確の初期状態抽選を実施。
- 偶数設定かつ高設定ほど高確開始が優遇される。
- 超高確開始（吉田宿相当）は設定5以上でのみ確認されているため、朝一状態は設定推測材料にもなる。
- 純電断時の内部状態について独立した全契約は今回の横断検索で確定資料を固定できず、一般論で補完しない。

### advantageousSectionReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ONのみ: **CARRY_OVER**。
- 通常の有利区間終了契機はBT終了時、800G天井BCでBT非当選時など。

### resetBenefits
- 設定変更固有の天井短縮はなし。
- 新有利区間としてモードテーブル・初期状態を再抽選するため、高確以上スタートや上位テーブルに期待できるが、これは有利区間移行時共通の抽選。
- 非有利区間中はレア役からエピソードBC抽選が行われる解析があるが、変更専用恩恵としては扱わない。

### resetPenalties
- 前日の有利区間累計G数、BCスルー回数、通常モードテーブルは失われる。
- 設定変更専用の追加的不利抽選は公開確認できず。

### resetDetection
- 朝一の有利区間ランプ消灯は設定変更方向、点灯継続は据え置き方向の強い材料。
- ただしホール側が変更後に1〜2G回して有利区間へ再突入させる対策が可能なため、消灯/点灯だけで絶対確定扱いにしない。
- 朝一レア役なしで高確へ移行した場合は設定変更期待度アップとする攻略資料あり。
- 甲賀卍谷スタートは変更/純電断双方で起こるため単独判別不可。
- 本機固有のガックン発生条件/率は再探索後も公開確定値を固定できず。

### numericResetData / publicMorningNumbers
- RESET後ゲーム数天井: **800G**（BC中除外）。
- BCスルー天井: **最大7スルー→次回8回目BCでBT**。
- 通常モードテーブル: **全16種、有利区間移行時に再抽選**。
- テーブル14選択率: 設定1 1/128、2 1/64、3 1/51.2、4 1/25.6、5 1/21.3、6 1/16。
- テーブル15選択率: 設定1 1/128、2 1/42.7、3 1/128、4 1/32、5 1/64、6 1/32。
- テーブル16選択率: 設定1 1/256、2 1/128、3 1/256、4 1/128、5 1/256、6 1/128。
- 設定変更専用の別テーブル振り分けではなく、有利区間移行時共通値として記録。

## resetBehavior 再探索メモ
2026-09-11に `SLOTバジリスク～甲賀忍法帖～絆2 / バジリスク絆2 / バジ絆2 / S／甲賀忍法帖／LL / 9S1461 / ミズホ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 800G / BCスルー / モードテーブル / 状態 / 有利区間 / ランプ / ガックン` を組み替え、メーカー系機種紹介、業界記事、HAZUSE、1geki、K-Navi、パチスロ必勝本系、当時解析、後年整理資料を横断。設定変更時有利区間RESET、純電断CARRY_OVER、天井/スルー、モードテーブル再抽選、ランプ判別は複数系統で固定。純電断時の内部状態の独立契約と本機固有ガックン率は推測補完しない。

## sources
取得日: 2026-09-11

1. 遊技日本 — 2/17導入 SLOTバジリスク～甲賀忍法帖～絆2
   - https://yugi-nippon.com/pachinko-new-machine/post-33224/
   - ミズホ製、2020-02-17全国導入、公式機種サイト公開を確認。
   - reliability: INDUSTRY
2. HAZUSE — SLOTバジリスク～甲賀忍法帖～絆2
   - https://hazuse.com/machine/pachislot/9S1461/
   - 型式 `S／甲賀忍法帖／LL`、検定番号9S1461、設定別BC/BT/機械割、約50G/50枚、純増、天井、通常モードテーブルを確認。
   - reliability: ANALYSIS_HIGH
3. HAZUSE — AT/ART詳細
   - https://hazuse.com/machine/pachislot/9S1461/genre/209/
   - 有利区間移行時のモードテーブル抽選、全16テーブル、テーブル14〜16振り分け、内部状態構造を確認。
   - reliability: ANALYSIS_HIGH
4. パチスロ必勝本系 — 基本スペック
   - https://p.hisshobon.jp/vpage/2362/2
   - 設定別BC/BT/機械割、約50G/50枚、純増2.9枚/Gを照合。
   - reliability: ANALYSIS_HIGH_SUPPORT
5. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_b_kizna2/3/
   - 有利区間開始から800G、BC最大7スルー、サブ液晶確認機能を確認。当時掲載の設定変更/電断内部状態は調査中表記。
   - reliability: ANALYSIS_HIGH
6. スロットセブン — 朝一リセット
   - https://slot-seven.com/basiliskkizuna2-tenzyou/
   - 設定変更で天井/有利区間RESET、純電断で引継ぎ、有利区間ランプ、甲賀卍谷開始を確認。
   - reliability: ANALYSIS_SUPPORT
7. すろぱちくえすと — 天井/朝一
   - https://www.slopachi-quest.com/article/basilisk-kizuna2-tennjou/
   - 朝一有利区間ランプ判別、レア役なし高確移行の変更期待度アップを照合。
   - reliability: ANALYSIS_SUPPORT
8. K-Navi — 2020年2月新台導入カレンダー
   - https://p-kn.com/calendar/202002/
   - 2020-02-17のパチスロ新台が本機1機であることを確認。
   - reliability: INDUSTRY_DATABASE
9. P-WORLD / グリーンべると — 2/17導入記事
   - https://news.p-world.co.jp/articles/12846/greenbelt
   - 2020-02-17導入とゲームフローを照合。
   - reliability: INDUSTRY

## missingFields
- 純電源OFF→ON時の低確/高確/超高確状態についての独立した全契約。
- 本機固有ガックン発生条件/発生率。
- 設定変更専用（有利区間移行時共通ではない）のモードテーブル振り分け。

## conflicts
- manufacturer表記は一部二次資料で「エレコ」「ユニバーサル」とされるものがあるが、当時業界記事・HAZUSE・K-Naviがミズホ製で一致するためcanonicalはミズホ。
- baseGamesPer50は約50G/50枚と約49.5G/50枚が併存。丸め/算出差として併記し平均化しない。

coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_LIMITED_UNVERIFIED_FIELDS
recordUpdated: 2026-09-11
