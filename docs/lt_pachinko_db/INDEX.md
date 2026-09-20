# Lucky Trigger Pachinko DB

更新日: 2026-09-21

## Scope
ラッキートリガー搭載パチンコ機のみを収集する。詳細ルール: [`CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`](../CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md)

## Status
- 収集開始済み
- 登録機種: 18
- COMPLETE_CORE: 17
- CONFLICT: 1
- 収集順: 2024年3月の初期LT機から時系列
- 2024-03-04初期LT 7機種 COMPLETE_CORE。
- 2024-04-08 2機種 COMPLETE_CORE。
- 2024-04-22 3機種 COMPLETE_CORE。
- 2024-05-07 2機種登録。PゴブリンスレイヤーLTはCOMPLETE_CORE、P GO!GO!郷 革命の5はLT突入割合3%/4%競合のためCONFLICT。
- 2024-06-03境界: P頭文字D 2nd、P魔王学院の不適合者、P魔法少女まどか☆マギカ3、Pうる星やつら～Eternal Love Song～をCOMPLETE_CORE。P ToLOVEるダークネス（319.6）とPクイーンズブレイド4 UNLIMITEDはLT非搭載のため対象外。
- 次回再開地点: **2024-06-03境界を閉鎖し、次の新規LT導入日へ前進。2024-07-08候補（Pアズールレーン THE ANIMATION 異次元トリガー、P貞子、e花の慶次～傾奇一転等）のLT搭載有無をDiscoveryし、搭載機だけを時系列で収集する。**

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

## Boundary / discovery notes
- 2024-03-18 Pファンキードクター 悪魔12000ver. — LT非搭載確認済み、対象外。
- 2024-04-22 e新・必殺仕置人 超斬撃199 — 通常約1/199.9、下位RUSH突入60%・継続約60%、LT超斬撃RUSH約88%。
- 2024-04-22 P FAIRY TAIL これが七炎竜の力だ — 図柄揃い約1/399.6、FTチャージ約1/324.3、LT七炎竜RUSH約77%。
- 2024-04-22 PAハイスクール・フリート オールスター すい～とでハッピー!2400 — 通常1/99.9、BMR突入100%、LT超BMR160約89%。初当り基準の総LT到達率は直接資料未確認のためUNVERIFIEDのまま推測しない。
- 2024-05-07 P GO!GO!郷 革命の5 — 通常1/199.8、下位RUSH突入約70%・継続約77%、LT LUCKY GO!GO! RUSH約90%。LT突入割合は約3%（P-WORLD・導入記事）と4%（解析振り分け表）が競合。10R約1060個はその他入賞込みで、1000個表記と定義分離。
- 2024-05-07 Pゴブリンスレイヤー ラッキートリガーVer. — 通常約1/129.7、下位ST60回約70%、下位大当り約10%でLT ULTIMATE RUSH、ST113回+ソクゲキ込みTOTAL約90.4%、右打ちALL約1000個（V入賞条件・払出）。
- P七つの大罪2 神千斬りVER. — 必勝本の基本スペックで「ラッキートリガー 非搭載」を直接確認。上位RUSHはあるがLTではないためDB対象外。導入日は資料上2024-05-07。
- 2024-06-03 P頭文字D 2nd — 約1/319.7、TOTAL RUSH突入約83%、下位約90%、RUSH突入時LT到達約31%、LT「最速ダウンヒルRUSH LEGEND」約96%。
- 2024-06-03 P魔王学院の不適合者 — 図柄揃い1/399.9、図柄揃い後RUSH100%・約75%、RUSH当り約25%→LBC成功約40%でLT「暴虐の魔王BURST」、初回図柄揃い後LT到達約42%、LT突入時継続約86%。後発99Ver/FVXの約92%等は混同しない。
- 2024-06-03 P 魔法少女まどか☆マギカ3 — 通常約1/199.9、RUSH突入55%（下位54%+LT直行1%）、下位約65%。下位当り約50%でワルプルギスの夜BONUS、勝率約55%でLT「アルティメット超RUSH」へ。LT約87%、右打ちALL約1500個。
- 2024-06-03 Pうる星やつら～Eternal Love Song～ — 図柄揃い約1/319、RUSH70%、下位約77%、LT「超電撃RUSH」約85%。DESTINY ROAD次回当り50%または電撃RUSH中20.3%でLT準備→次回当りが主要LT経路。右打ちALL約1500個。
- 2024-06-03 P ToLOVEるダークネス（PToLOVEるダークネスH1YZ5） — 約1/319.6、ST楽園計画約77%。2024年6月版にはLT記載なし。後発199ver./100ver.の上位RUSH・LT仕様と混同しないため対象外。
- 2024-06-03 Pクイーンズブレイド4 UNLIMITED（Pクイーンズブレイド4V1D） — 約1/319.6、RUSH約60%・約85%、ST80+4。初当り含む3連後のM・Y・K PARADISEは高速演出モードで、LT搭載根拠なし。後発「奈落5400」LT版と混同せず対象外。

## QA progress
retrievedAt: 2026-09-21
- 既存レコードのLT搭載条件、重複、別スペック名を継続監査。
- PAハイスクール・フリートのUNVERIFIED（通常初当り基準の総LT到達率）は直接公表値がないため維持。推測換算なし。
- P GO!GO!郷のLT突入割合3%/4%競合はCONFLICT維持。
- P七つの大罪2 神千斬りVER.は上位RUSH搭載だがLT非搭載を直接確認し、対象外として境界を閉じた。
- P頭文字D 2nd、P魔王学院の不適合者は業界記事と複数解析資料でCore/LT構造を照合しCOMPLETE_CORE。
- P 魔法少女まどか☆マギカ3、Pうる星やつら～Eternal Love Song～を業界記事+複数解析資料で照合しCOMPLETE_CORE。
- 同日候補P ToLOVEるダークネス319.6、Pクイーンズブレイド4 UNLIMITEDはLT非搭載境界として除外。後発LT別スペックを混同しない。

## Latest relay note — Relay 2
retrievedAt: 2026-09-21
- 最新main README、LTミッションv0.1、INDEX、machines一覧、Relay 1再開地点を確認。
- 2024-06-03 P 魔法少女まどか☆マギカ3を正式登録。LT直行1%と下位RUSH経由（当り約50%→ワルプルギス勝利約55%）を定義分離。
- 2024-06-03 Pうる星やつら～Eternal Love Song～を正式登録。DESTINY ROAD 50%ルートとLT準備20.3%ルートを分離し、初当り基準の総LT到達率は推測せずUNVERIFIED。
- P ToLOVEるダークネス319.6とPクイーンズブレイド4 UNLIMITEDは2024年6月版にLT搭載根拠がなく、後発LT別スペックとの混同を避けて対象外。
- 2024-06-03境界を閉鎖。次の新規LT導入日へ進む。

### 次回再開地点
**2024-07-08候補からDiscovery再開。Pアズールレーン THE ANIMATION 異次元トリガーを優先し、P貞子、e/P花の慶次～傾奇一転など同日候補のLT搭載有無を確認。搭載確認できた機種だけCore/LT収集し、同日境界を閉じてから次日へ進む。**
