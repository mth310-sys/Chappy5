更新日: 2026-09-09

## 現在地点
- recordCount: **1049**
- latestRecordAdded: **パチスロ 宇宙戦艦ヤマト2199**（Sammy）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-20_uchu-senkan-yamato-2199.md`
- chronologicalFrontier: **2017-02-20**
- frontierLatestMachine: **パチスロ 宇宙戦艦ヤマト2199 — No.1049**
- schema: **resetBehavior v0.7**
- status: **2017-02-20_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1048実レコードを再取得して開始。
- main正本は1048件 / 2017-02-06群OPEN_PENDING_FINAL_AUDIT。
- 2017-02-06群を全メーカー再監査。モゲスロの同日一覧は `牙狼-守りし者- / おそ松さん / JAWS / ジャックポットトロピカルバージョン2 / GⅠ優駿倶楽部` の5機種で、すべてNo.1044〜1048として登録済みのため `2017-02-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とした。
- K-Naviのみ `パチスロマジンガーZ 新たな魔神の力` を2/6に掲載するが、ちょんぼりすた、すろぱちくえすと、CrankySeven、Pachinavi等は2017-02-20で一致し、2/20時点記事には「すでに導入地域あり」との記述もある。全国導入日と地域先行の混在可能性を考え、2/6群へ早取りせず2/20群で `CONFLICT_RELEASE_DATE_2017_02_20_VS_2017_02_06_KNAVI_OR_REGIONAL_EARLY` として処理する。
- 2017-02-07〜02-19境界を監査。2-9伝説は2/6から2/20へ直接進み、K-Naviの2/13列はパチンコのみで全国導入パチスロ本線を確認できないため `CLOSED_FOR_CURRENT_RESEARCH`。
- 2017-02-20群へ進み、サミー公式が同日を「ホール導入日」と直接明記する `パチスロ 宇宙戦艦ヤマト2199` を未登録確認後No.1049として追加。

## No.1049 — パチスロ 宇宙戦艦ヤマト2199
- manufacturer: **Sammy**
- releaseDate: **2017-02-20**
- formalModelName: **宇宙戦艦ヤマト2199／ZX**
- certificationNumber: **6S1502**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.8 / 98.8 / 100.3 / 104.6 / 108.1 / 112.0%**。
- BIG: 全設定約**1/1986**、大ガミラスモード: 全設定約**1/1986**。
- ART初当たり: **1/400 / 385 / 383 / 334 / 309 / 270**。
- 合算: **1/285 / 277 / 277 / 250 / 236 / 212**。
- 50枚ベース: **約38.2〜38.5G/50枚（設定差あり）**。細かな設定別値は過剰精密化せずレンジ保持。
- ART「イスカンダルロード」: **約1.9枚/G、初期40G+α**。ボーナス込み約2.0枚/G表記は定義差として分離。
- BIG約**204枚**、大ガミラスモード約**48枚**。MB「COSMO COMBO」は9枚役×4G、約24枚。

### resetBehavior v0.7
- 通常天井は**ART間1200G**。途中のボーナスでは天井ゲーム数をリセットしない。
- 設定変更時は天井進捗RESET後、**200 / 400 / 800 / 1200G**から天井を再選択。
- 設定変更時内部状態は全設定共通 **低確50.0% / 高確50.0%**。
- 純電源OFF→ONでは**天井ゲーム数・内部状態CARRYOVER**。据え置きもホール経営上の主要進捗はCARRYOVERとして扱う。
- 設定変更時天井振り分け:
  - 設定1: **1.7 / 20.0 / 78.3 / 0%**
  - 設定2: **5.0 / 15.0 / 80.0 / 0%**
  - 設定3: **5.0 / 20.0 / 75.0 / 0%**
  - 設定4: **5.0 / 15.0 / 79.6 / 0.4%**
  - 設定5: **5.0 / 20.0 / 72.5 / 2.5%**
  - 設定6: **8.3 / 25.0 / 62.5 / 4.2%**
  （順に200/400/800/1200G）
- 1200G選択は設定4以上でのみ発生する解析値。200G選択も設定差があり朝一客の推測材料になる。
- 液晶ステージの純電断挙動は当時資料が「調査中」で、再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン等の物理的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-02-06境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  - パチスロ牙狼-守りし者- — No.1044
  - JAWS ～it's a SHARK PANIC～ — No.1045
  - GⅠ優駿倶楽部 — No.1046
  - パチスロおそ松さん — No.1047
  - ジャックポット トロピカルバージョン2 — No.1048
- `パチスロマジンガーZ 新たな魔神の力` はK-Navi 2/6表記を保持するが、複数系統2/20資料を優先し2/20群でCONFLICT処理する。

## 2017-02-07〜02-19境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 2-9伝説の次のパチスロ導入群は2/20。K-Navi 2/13列には全国導入パチスロ本線なし。

## 2017-02-20境界監査
- status: **OPEN**。
- 登録済み:
  - パチスロ 宇宙戦艦ヤマト2199 — No.1049
- 同日未処理候補:
  - **ヱヴァンゲリヲン・勝利への願い**（ビスティ）
  - **パチスロマジンガーZ 新たな魔神の力**（EXCITE） — 2/6表記との日付CONFLICT要保持
- 2-9伝説は2/20群を `ヱヴァンゲリヲン・勝利への願い / 宇宙戦艦ヤマト2199 / マジンガーZ 新たな魔神の力` と整理。K-Naviは全国一斉列にヤマト2199とエヴァを掲載し、マジンガーZは2/6列に掲載するため、マジンガーのみ日付QAを継続する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1049を再取得。
2. **1049件 / chronologicalFrontier 2017-02-20 / 2/20群OPEN** を正本として継続。
3. 次の未処理機は **No.1050候補 `ヱヴァンゲリヲン・勝利への願い`（ビスティ）**。性能コア＋resetBehavior v0.7を収集して登録。
4. 続いて `パチスロマジンガーZ 新たな魔神の力` を処理。全国導入2/20とK-Navi 2/6の競合を平均・消去せずCONFLICT保持する。
5. 2/20群を全メーカー最終監査後CLOSED可否を判定し、2/21以降を日付順に進める。既知の次大群は2/27 `パチスロ モンキーターンIII` だが、2/21〜26の未登録全国機を先に監査する。
6. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1049 パチスロ 宇宙戦艦ヤマト2199
- Sammy公式 発売告知: https://new.sammy.co.jp/japanese/news/old/2017/615.html
- Sammy公式 マイスロ（2/20ホール導入日）: https://www.sammy.co.jp/japanese/myslot/news/index_9.html
- グリーンべると / P-WORLD業界記事: https://news.p-world.co.jp/articles/8958/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/6S1502/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S1502/genre/207/
- すろぱちくえすと: https://www.slopachi-quest.com/article/yamato-2199/
- パチ7 天井: https://pachiseven.jp/machines/5058/cutout/78
- パチ7 ART: https://pachiseven.jp/machines/5058/cutout/6
- Pachinavi: https://pachinavi.net/machines/uchuu-senkan-yamato-2199/

### 境界監査
- モゲスロ 2017年カレンダー: https://moge-site.com/new-slot2017
- 2-9伝説 2017導入一覧: https://29den.com/newslot/
- K-Navi 2017年2月カレンダー: https://p-kn.com/calendar/201702/

### マジンガーZ日付CONFLICT確認
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/30654/
- すろぱちくえすと: https://www.slopachi-quest.com/article/mazingerz-majin/
- CrankySeven: https://crankyseven.com/mazingerz-pc.htm
- Pachinavi: https://pachinavi.net/machines/mazinger-z/
- K-Navi 2/6表記: https://p-kn.com/calendar/201702/
