# Lucky Trigger Pachinko DB

更新日: 2026-09-21

## Scope

ラッキートリガー搭載パチンコ機のみを収集する。

詳細ルール:
[`CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`](../CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md)

## Status

- 収集開始済み
- 登録機種: 9
- COMPLETE_CORE: 9
- 収集順: 2024年3月の初期LT機から時系列
- QA進捗: 2024-03-04初期LT 7機種は全件COMPLETE_CORE。2024-04-08「P大工の源さん超韋駄天2 極源LighT」「Pバイオハザード RE:2 LTver.」まで新規収集・照合しCOMPLETE_CORE化。
- 境界監査: 2024-03-18「Pファンキードクター 悪魔12000ver.」はLT非搭載確認済みのため対象外。
- 次回再開地点: 2024-04-22「e新・必殺仕置人～超斬撃～」からDiscovery/Core/LT収集。同日候補も漏れなく確認して時系列継続。

## Queue

5人リレー。各リレーはGitHub最新mainを読み、前リレーの次の未処理機種から同一時系列キューを継続する。5人目は収集に加えてQA / Integrationを行う。

## Machines

| 導入日 | 機種 | メーカー | 状態 |
|---|---|---|---|
| 2024-03-04 | P緋弾のアリア ～緋緋神降臨～ ラッキートリガーVer. | 藤商事 | COMPLETE_CORE |
| 2024-03-04 | P北斗の拳 強敵 LT | サミー | COMPLETE_CORE |
| 2024-03-04 | P真・座頭市物語 | ニューギン | COMPLETE_CORE |
| 2024-03-04 | Pこの素晴らしい世界に祝福を！199LT「このラッキートリガーに祝福を！」 | 豊丸産業 | COMPLETE_CORE |
| 2024-03-04 | PLT OVERLORD魔導王光臨 | サンセイアールアンドディ | COMPLETE_CORE |
| 2024-03-04 | P世紀末・天才バカボン～福神SPEC～ | D-light | COMPLETE_CORE |
| 2024-03-04 | ぱちんこＧⅠ優駿倶楽部２ ラッキートリガーver | コナミアミューズメント | COMPLETE_CORE |
| 2024-04-08 | P大工の源さん超韋駄天2 極源LighT | 三洋物産 | COMPLETE_CORE |
| 2024-04-08 | Pバイオハザード RE:2 LTver. | アムテックス | COMPLETE_CORE |

## Discovery note

2024-03-04の初期LT 7機種は全件登録完了。

2024-03-18境界:
- Pファンキードクター 悪魔12000ver. — 新内規対応だがLT非搭載。DB対象外。

2024-04-08:
- P大工の源さん超韋駄天2 極源LighT — 登録済み。
- Pバイオハザード RE:2 LTver. — 登録済み。

2024-04-22候補:
- e新・必殺仕置人～超斬撃～ — LT搭載・導入日2024-04-22をDiscovery確認。次の収集対象。
- 同日にはP FAIRY TAILこれが七炎龍の力だ、PAハイスクール・フリート2等のLT候補があるため、次リレーでLT搭載・正式導入日を確認し同日内の漏れを防ぐ。

## Latest relay note

### Pバイオハザード RE:2 LTver. — 2026-09-21
- LT搭載: Amusement Japan、遊技日本、遊技通信、P-WORLD等で確認。
- 型式: PバイオハザードRE2L9YZ4。製造元アムテックス。
- 導入: 2024-04-08。
- 通常時: 特図1図柄揃い1/199.8、特図2図柄揃い1/45.8。
- 初当り: 1% 10R約1500個→HAZARD RUSH PREMIUM、50% 2R約300個→HAZARD RUSH、49% 2R約300個→通常（いずれも払出）。
- HAZARD RUSH: ST53回+残保留4、継続約72%。大当りはALL10R約1500個、67%で同RUSH、33%でSURVIVAL CHANCE。
- LT: HAZARD RUSH XTREME。SURVIVAL CHANCE中大当り、または初当り1%のPREMIUM→次回大当りから突入。
- LT: ST87回+残保留4、継続約87%、右打ち10R約1500個。最終変動/残保留当選には下位RUSH側振り分けの例外あり。
- 初当りからLTトータル突入率約21.8%は二次資料で確認。ただし一次/業界資料で総到達率の直接表記は今回未確認のためANALYSIS_SINGLEとして分離。
- 遊タイム: 非搭載。
- 状態: COMPLETE_CORE。CONFLICTなし。
- 出典: Amusement Japan、P-WORLD業界ニュース（遊技日本/遊技通信）、なな徹、P-WORLD機種DB、A-PACHINKO。取得日2026-09-21。

### 次回再開地点
- 収集: 2024-04-22 e新・必殺仕置人～超斬撃～。
- 同日LT候補を横断確認してから次の日付へ進む。
- QA: 初期LT既存レコードの遡及確認を順次継続。
