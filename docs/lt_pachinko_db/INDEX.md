# Lucky Trigger Pachinko DB

更新日: 2026-09-21

## Scope
ラッキートリガー搭載パチンコ機のみを収集する。詳細ルール: [`CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`](../CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md)

## Status
- 収集開始済み
- 登録機種: 29
- COMPLETE_CORE: 28
- CONFLICT: 1
- 収集順: 2024年3月の初期LT機から時系列
- 2024-03-04初期LT 7機種 COMPLETE_CORE。
- 2024-04-08 2機種 COMPLETE_CORE。
- 2024-04-22 3機種 COMPLETE_CORE。
- 2024-05-07 2機種登録。PゴブリンスレイヤーLTはCOMPLETE_CORE、P GO!GO!郷 革命の5はLT突入割合3%/4%競合のためCONFLICT。
- 2024-06-03 4機種 COMPLETE_CORE。P ToLOVEるダークネス319.6、Pクイーンズブレイド4 UNLIMITEDはLT非搭載境界として除外。
- 2024-07-08 4機種 COMPLETE_CORE。
- 2024-08-05 2機種 COMPLETE_CORE: PAスーパー海物語IN地中海2、e北斗の拳10。
- 2024-08-19 2機種 COMPLETE_CORE: Pリング 呪いの7日間3 ラッキートリガーVer.、Pドラムだ！金ドン 花火外伝。
- 2024-09-02 3機種 COMPLETE_CORE: eゴッドイーター TRIPLE BURST、Pルパン三世 銭形からの招待状 77Sweet Ver.、e仮面ライダー電王。
- 次回再開地点: **2024-09-02同日候補の取りこぼし最終確認後、2024年9月の次の導入日へ時系列前進。** 詳細は `LATEST_HANDOFF.md`。

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
| 2024-08-05 | PAスーパー海物語IN地中海2 | 三洋物産 | COMPLETE_CORE |
| 2024-08-05 | e北斗の拳10 | サミー（製造: 銀座） | COMPLETE_CORE |
| 2024-08-19 | Pリング 呪いの7日間3 ラッキートリガーVer. | JFJ / 藤商事グループ | COMPLETE_CORE |
| 2024-08-19 | Pドラムだ！金ドン 花火外伝 | ミズホ / ユニバーサルエンターテインメント | COMPLETE_CORE |
| 2024-09-02 | eゴッドイーター TRIPLE BURST | Sansei R&D | COMPLETE_CORE |
| 2024-09-02 | Pルパン三世 銭形からの招待状 77Sweet Ver. | 平和 | COMPLETE_CORE |
| 2024-09-02 | e仮面ライダー電王 | 京楽産業. | COMPLETE_CORE |

## Boundary / discovery notes
- 2024-03-18 Pファンキードクター 悪魔12000ver. — LT非搭載確認済み、対象外。
- P七つの大罪2 神千斬りVER. — LT非搭載を直接確認、対象外。
- 2024-06-03 P ToLOVEるダークネス319.6 / Pクイーンズブレイド4 UNLIMITED — 当該スペックにLT搭載根拠なし。後発LT別スペックと混同しない。
- PAハイスクール・フリート — 通常初当り基準の総LT到達率は直接資料未確認、推測せずUNVERIFIED維持。
- P GO!GO!郷 革命の5 — LT突入割合 約3%対4%の資料競合をCONFLICT維持。2026-09-21 QAでP-WORLD詳細振り分けも約3%を確認したが、4%資料との競合は一次資料確定まで解消しない。
- 2024-07-08 P/e花の慶次は同名別スペックを分離。P機LT直行17.6%、e機40.6%。
- 2024-08-05 PAスーパー海物語IN地中海2 — 約1/89.8、初当り後100%時短20、突破約50.3%、地中海JOURNEY約75.2%。特図2 10R 2%でLT「PREMIUM VACATION」、約95%。解析資料にLT約1/2346.03 / 初当り約26.1回に1回の直接値あり。
- 2024-08-05 e北斗の拳10 — 図柄揃い約1/348.6、RUSH約80%/継続約80%、LT「HYPER BATTLE MODE」約89%。通常直行とBATTLE MODE→無想転生チャンス経由の複数LT経路あり。総LT到達率は推測せずUNVERIFIED。
- 2024-08-19 Pリング 呪いの7日間3 LT — 約1/199.8、呪いの連鎖70%/約73%、大当り約10%でLT「貞子夢爽」約90%。「1200個時20%」は分母差で整合。
- 2024-08-19 Pドラムだ！金ドン 花火外伝 — RUSH=LT。通常1/199.8、直行0.5%+金ドンチャレンジ経由、TOTAL継続88.4%。K-Naviのみ8/5表記を確認したが、業界発表・必勝本・一撃等は8/19で一致するためcanonical 8/19。
- 2024-09-02 eゴッドイーター — 1/199.5、液晶図柄揃い1/539.2、あらがみちゃーじ1/314.2は定義分離。JUDGMENT成功約64%でLT状態、1/2/3セットTOTAL約80.1/90.1/93.4%。
- 2024-09-02 Pルパン77Sweet — 初当り1/77.7、GOLDEN TIME 51%/約60%、RUSH中大当り15%でLT、LT約91%。
- 2024-09-02 e仮面ライダー電王 — 2024年319.9版。2025年デカヘソ239と分離。電王RUSH50%、突破約60%でLT、CLIMAX RUSH約77%。

## QA progress
retrievedAt: 2026-09-21
- 既存レコードのLT搭載条件、重複、別スペック名を継続監査。
- PAハイスクール・フリートのUNVERIFIED、P GO!GO!郷のCONFLICTを維持。
- P GO!GO!郷を再QA。P-WORLDはRUSH中大当りの約3%かつ詳細振り分け約3%/約80%/約17%を掲載。二次資料4%との競合は平均せず維持。
- 2024-09-02 3機種は業界一次/メーカー公式/複数解析を横断。RUSH/LT確率、払出/実獲得、図柄揃い/大当り合算の定義を分離。
- 通常初当り基準の総LT到達率が直接公表されない機種は経路別数値のみ保存し、合算推測しない。

## Latest relay note — Relay 5 / QA
retrievedAt: 2026-09-21
- 最新main README、LTミッションv0.1、INDEX、既存machines、Relay 4再開地点を確認。
- 2024-09-02 eゴッドイーター TRIPLE BURST / Pルパン三世 銭形からの招待状 77Sweet Ver. / e仮面ライダー電王をCOMPLETE_CORE登録。
- 既存CONFLICT P GO!GO!郷 革命の5を遡及QAし、3%支持資料を追加確認したが4%資料を否定できるメーカー一次値が未取得のためCONFLICT維持。
- 詳細な引継ぎは `LATEST_HANDOFF.md` に保存。

### 次回再開地点
**2024-09-02同日全パチンコ候補の取りこぼしを最終確認し、その後2024年9月の次の導入日へ進む。既登録3機種は具体的なQA問題がない限り再収集しない。**
