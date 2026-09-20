# Lucky Trigger Pachinko DB

更新日: 2026-09-21

## Scope
ラッキートリガー搭載パチンコ機のみを収集する。詳細ルール: [`CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`](../CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md)

## Status
- 収集開始済み
- 登録機種: 22
- COMPLETE_CORE: 21
- CONFLICT: 1
- 収集順: 2024年3月の初期LT機から時系列
- 2024-03-04初期LT 7機種 COMPLETE_CORE。
- 2024-04-08 2機種 COMPLETE_CORE。
- 2024-04-22 3機種 COMPLETE_CORE。
- 2024-05-07 2機種登録。PゴブリンスレイヤーLTはCOMPLETE_CORE、P GO!GO!郷 革命の5はLT突入割合3%/4%競合のためCONFLICT。
- 2024-06-03 4機種 COMPLETE_CORE。P ToLOVEるダークネス319.6、Pクイーンズブレイド4 UNLIMITEDはLT非搭載境界として除外。
- 2024-07-08 4機種 COMPLETE_CORE: Pアズールレーン THE ANIMATION 異次元トリガー、P貞子、P花の慶次～傾奇一転、e花の慶次～傾奇一転。
- 次回再開地点: **2024-07-08境界を閉鎖し、次の新規LT導入日へ前進。2024年8月導入群をDiscoveryし、Pリング 呪いの7日間3 ラッキートリガーVer.を優先候補として導入日/LT搭載を確認してから同日時系列を収集する。**

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
| 2024-04-22 | e 新・必殺仕置人 超斬撃199 | 京楽産業. | COMPLETE_CORE |
| 2024-04-22 | P FAIRY TAIL これが七炎竜の力だ | 藤商事 | COMPLETE_CORE |
| 2024-04-22 | PAハイスクール・フリート オールスター すい～とでハッピー!2400 | メーシー | COMPLETE_CORE |
| 2024-05-07 | P GO!GO!郷 革命の5 | ニューギン | CONFLICT |
| 2024-05-07 | Pゴブリンスレイヤー ラッキートリガーVer. | JFJ / 藤商事系 | COMPLETE_CORE |
| 2024-06-03 | P頭文字D 2nd | サミー（製造: 銀座） | COMPLETE_CORE |
| 2024-06-03 | P魔王学院の不適合者 | 藤商事 | COMPLETE_CORE |
| 2024-06-03 | P 魔法少女まどか☆マギカ3 | 京楽産業. | COMPLETE_CORE |
| 2024-06-03 | Pうる星やつら～Eternal Love Song～ | ニューギン | COMPLETE_CORE |
| 2024-07-08 | Pアズールレーン THE ANIMATION 異次元トリガー | 京楽産業. | COMPLETE_CORE |
| 2024-07-08 | P貞子 | 藤商事 | COMPLETE_CORE |
| 2024-07-08 | P花の慶次～傾奇一転 | ニューギン | COMPLETE_CORE |
| 2024-07-08 | e花の慶次～傾奇一転 | ニューギン | COMPLETE_CORE |

## Boundary / discovery notes
- 2024-03-18 Pファンキードクター 悪魔12000ver. — LT非搭載確認済み、対象外。
- P七つの大罪2 神千斬りVER. — LT非搭載を直接確認、対象外。
- 2024-06-03 P ToLOVEるダークネス319.6 / Pクイーンズブレイド4 UNLIMITED — 当該スペックにLT搭載根拠なし。後発LT別スペックと混同しない。
- PAハイスクール・フリート — 通常初当り基準の総LT到達率は直接資料未確認、推測せずUNVERIFIED維持。
- P GO!GO!郷 革命の5 — LT突入割合 約3%対4%の資料競合をCONFLICT維持。
- 2024-07-08 Pアズールレーン — 約1/199、時短100回100%、SS RUSH突破約40%、ST130回約80%。SS RUSH中13%でLT「覚醒BONUS」。覚醒BONUSは大当り5回+α、約68%が5000個以上。通常初当り基準の総LT到達率は直接値なし。
- 2024-07-08 P貞子 — 複合大当り約1/201、RUSH/LT約60%、ST100回・約1/77・継続約73%。RUSH中約50%で極最恐BONUS、約1500個上乗せ約50%ループ。一般的な図柄揃い機と初当り定義が異なるため各演出確率を分離。
- 2024-07-08 P花の慶次～傾奇一転 — 図柄揃い1/319.80、RUSH73.5%、LT「傾奇BURST」初当り17.6%、120回+残保留・約87%、LT中ALL約1500個。
- 2024-07-08 e花の慶次～傾奇一転 — 図柄揃い1/319.81、RUSH52.5%、LT直行40.6%、120回+残保留・約87%、LT中ALL約1500個。P機とは別レコード。

## QA progress
retrievedAt: 2026-09-21
- 既存レコードのLT搭載条件、重複、別スペック名を継続監査。
- PAハイスクール・フリートのUNVERIFIED、P GO!GO!郷のCONFLICTを維持。
- 2024-07-08はメーカー公式/業界一次/複数解析を優先照合。P/e花の慶次は同名別スペックを分離。
- P貞子は業界資料の「極最恐BONUS=LT」表現と解析資料の「RUSH突入=LT発動」表現を数値競合とはせず、超貞子RUSHと極最恐BONUSの階層をレコード内で明示。

## Latest relay note — Relay 3
retrievedAt: 2026-09-21
- 最新main README、LTミッションv0.1、INDEX、machines一覧、Relay 2再開地点を確認。
- 2024-07-08 Pアズールレーン THE ANIMATION 異次元トリガーをCOMPLETE_CORE登録。
- 2024-07-08 P貞子をCOMPLETE_CORE登録。特殊な通常時抽選定義を分離保存。
- 2024-07-08 P花の慶次～傾奇一転 / e花の慶次～傾奇一転を別レコードでCOMPLETE_CORE登録。LT直行17.6%対40.6%を混同しない。
- 2024-07-08境界を閉鎖し、次の新規LT導入日へ進む。

### 次回再開地点
**2024年8月導入群のDiscoveryから再開。Pリング 呪いの7日間3 ラッキートリガーVer.を優先候補として正式導入日を確認し、その同日候補を洗い出す。LT搭載確認済み機だけCore/LT収集し、同日境界を閉じてから次日へ前進する。**
