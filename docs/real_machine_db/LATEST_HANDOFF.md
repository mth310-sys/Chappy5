更新日: 2026-09-11

## 現在地点
- recordCount: **1382**
- latestRecordAdded: **パチスロひぐらしのなく頃に祭2 — No.1382**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-12-21_higurashi-matsuri2.md`
- chronologicalFrontier: **2020-12-21**
- frontierLatestMachine: **パチスロひぐらしのなく頃に祭2 — No.1382**
- schema: **resetBehavior v0.7**
- status: **2020-12-21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1380「Sどんだけ」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- 2020-12-21群を1geki、K-Navi、業界/解析資料で再監査。
- K-Navi旧カレンダーでは `パチスロ頭文字D` も12/21に掲載されるが、1gekiの確定カレンダーでは12/21スロットは哲也・ひぐらし祭2の2機。頭文字Dは後発実導入資料で2021-01-12を確認しているため、予定変更/延期として12/21群へ重複登録しない。
- **No.1381「パチスロ 哲也 －天運地力－」**、**No.1382「パチスロひぐらしのなく頃に祭2」**を追加。
- 12/21群はこの2機でCLOSED。2020年12月の1geki確定カレンダー上も12/21以降に追加スロットはないため、次回は2021年1月境界へ進む。

## No.1381 — パチスロ 哲也 －天運地力－
- path: `docs/real_machine_db/machines/2020-12-21_tetsuya-tenun-chiriki.md`
- manufacturer: **Daiichi（大一商会）**
- formalModel: **Sパチスロ哲也6.1 DSS**
- releaseDate: **2020-12-21**
- generation/system: **6.1号機 / 純増可変AT / 擬似ボーナス**
- payoutRateBySetting: **97.3 / 98.9 / 100.7 / 104.3 / 107.1 / 110.1%**
- CZ「頂上決戦」: **1/252 → 1/217**
- 初当り: **1/463 → 1/293**
- baseGamesPer50: **約50G**
- netIncrease: **約2.5枚/G、上位/雀聖BONUS約5.0枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1381
- 設定変更: **天井・内部状態・有利区間RESET、牌pt再抽選**。
- 据え置き/純電断: **天井・牌pt・内部状態・有利区間CARRY_OVER**。
- 天井: **有利区間移行後867G付近（液晶約900G）で雀聖BONUS**。
- 朝一公開値: **モーニングフリーズ1/16384**。
- 設定変更後1回目初当り: **玄人タイム約38% / 雀聖BONUS約62%**。
- 有利区間移行時牌pt: **1pt 43.359 / 2pt 25.000 / 3pt 15.625 / 4pt 6.250 / 5pt 6.250 / 6pt 1.563 / 7pt 1.563 / 8pt 0.391%**。
- 変更判別: **朝一有利区間ランプ消灯=変更濃厚、点灯=据え置き濃厚**。神保ステージ開始は変更/電断共通で単独判別不可。

## No.1382 — パチスロひぐらしのなく頃に祭2
- path: `docs/real_machine_db/machines/2020-12-21_higurashi-matsuri2.md`
- manufacturer: **オーイズミ**
- formalModel: **Sパチスロひぐらしのなく頃に祭2PX**
- releaseDate: **2020-12-21**
- generation/system: **6.1号機 / A+ART / 技術介入**
- 市場予測機械割: **96.5 / 97.6 / 99.1 / 101.2 / 102.8 / 103.9%**
- 完全攻略機械割: **103.0 / 104.1 / 105.5 / 107.4 / 109.0 / 110.0%**
- ボーナス合算: **1/197.4 → 1/173.8**
- baseGamesPer50: **約34.9G**
- netIncrease: **ART約1.0枚/G**
- basicPayout: **オヤシロ最大202枚 / ひぐらし最大160枚 / 富竹最大56枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1382
- CZ天井: **ART転落後200G or 400Gで運命分岐モード**。前回転落時の技術介入成功/失敗で次回200/400G。
- **設定変更でもCZ天井G数を引き継ぐ**。
- 設定変更: **有利区間RESET / CZ天井G CARRY_OVER / 鬼隠し編ステージ開始**。
- 据え置き/純電断: **有利区間・CZ天井GともCARRY_OVER**。電断後も鬼隠し編ステージ開始。
- リセット専用天井短縮なし。
- ガックン/有利区間ランプ単独の本機固有変更判別契約は、検索語・資料系統変更後も高信頼で固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2020-12-21群監査 — CLOSED
処理済み:
1. **パチスロ 哲也 －天運地力－ — No.1381**
2. **パチスロひぐらしのなく頃に祭2 — No.1382**

- K-Naviは頭文字Dも12/21予定として掲載するが、実導入は2021-01-12側で扱う。予定日と実導入日を混同して12/21へ重複登録しない。
- 1geki 2020年12月確定カレンダーでは12/21のスロットは上記2機で、以後12月内に追加スロットなし。2020年本線はここで終了。

## 次回本線の再開地点
- 最新main再同期後、**2020-12-22～2021-01-11境界監査 → 2021-01-12群**へ進む。
- 先頭確認候補: **パチスロ頭文字D**。K-Navi旧予定12/21との導入日差を保持し、実導入2021-01-12側で一度だけ登録する。
- 2021-01-12同日群は開始時に1geki/K-Navi/業界記事/メーカー系統を横断し、全候補を確定してからNo.1383以降を付与する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線2機の処理を優先し、遡及レコードの更新は行っていない。
- 次回遡及QAカーソルは引き続き **`docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）**。

## GitHub保存
- No.1381追加 commit: `3571a73c349d443ddb2f5893630ba1cf7dba6073`
- No.1382追加 commit: `c7b4e0921727d99474b5fc9d1ddc810f820fe7a7`

## 主要出典 — 取得日 2026-09-11
### No.1381 哲也－天運地力－
- https://www.pachibee.jp/machines/index/220100008
- https://1geki.jp/slot/s_tetsuya_tenun/
- https://nana-press.com/kaiseki//machine/96/
- https://nana-press.com/kaiseki/machine/96/2337/
- https://nana-press.com/kaiseki/machine/96/2518/
- https://slotjin.com/tenjoukitaichi/tetsuya/
- https://www.slopachi-quest.com/article/tetuya-tennunn-tenjou/
- https://kaiseki.sulopachinews.com/archives/2352

### No.1382 ひぐらしのなく頃に祭2
- https://yugi-nippon.com/pachinko-new-machine/post-39967/
- https://1geki.jp/slot/higurashi_2/3/
- https://www.slopachi-quest.com/article/higurasimaturi2-tenjou/
- https://www.slopachi-quest.com/article/higurasimaturi2-settei/
- https://chonborista.com/slot/oizumi-slot/119798/
- https://p-kn.com/slot/3498/
- https://www.nakaiti.com/html/sOizumi104.html
- https://kaiseki.sulopachinews.com/archives/2352

### 2020-12-21群 / 次境界
- https://1geki.jp/newmachinecalender/202012/
- https://p-kn.com/calendar/202012/
