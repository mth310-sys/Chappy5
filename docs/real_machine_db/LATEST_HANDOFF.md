更新日: 2026-09-11

## 現在地点
- recordCount: **1327**
- latestRecordAdded: **パチスロ1000ちゃん — No.1327**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-01-06_pachislot-1000chan.md`
- chronologicalFrontier: **2020-01-06**
- frontierLatestMachine: **パチスロ1000ちゃん — No.1327**
- schema: **resetBehavior v0.7**
- status: **2020-01-06_GROUP_OPEN_1_OF_2_CONFIRMED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1326「パチスロたまピー」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- 2019-12-24～2020-01-05境界を導入カレンダー、当時/後年機種DB、新台資料で再監査。1gekiの2019年12月カレンダーでは12/23「たまピー」が同月最後のスロット掲載、2020年1月の最初のスロット導入群は1/6。追加独立登録機を確認できず、**2019年末境界をCLOSED** とした。
- 2020-01-06群は **「パチスロ1000ちゃん」「Sリング 恐襲ノ連鎖」2機**を確認。
- main上で「パチスロ1000ちゃん」既存レコードなしを確認し、No.1327として新規追加。

## No.1327 — パチスロ1000ちゃん
- path: `docs/real_machine_db/machines/2020-01-06_pachislot-1000chan.md`
- manufacturer: **オーイズミ**
- formalModel: **`Sパチスロ1000ちゃんPX`**
- certificationNumber: **`9S1223`**
- releaseDate: **2020-01-06**
- generation/system: **6号機 / A+AT / リアルボーナス+AT**
- payoutRate: **設定1 97.5% / 2 98.5% / 3 100.7% / 4 103.5% / 5 106.0% / 6 110.0%**
- bonusCombined: **1/188 / 1/183 / 1/174 / 1/161 / 1/149 / 1/137**
- CZ: **1/489 / 1/461 / 1/429 / 1/409 / 1/376 / 1/342**
- AT initial: **1/446 / 1/432 / 1/409 / 1/388 / 1/361 / 1/334**
- base: **約37.5G/50枚**
- AT netIncrease: **約2.0枚/G**
- basicPayout: **BIG平均約150枚（最大180枚） / LIVE BONUS平均約60枚 / メインAT 30G+α**
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1327
- resetBehaviorQA: **COMPLETE_MAJOR_CONTRACTS_WITH_LIMITED_UNVERIFIED**
- 設定変更: **天井RESET / 内部状態再抽選 / 有利区間RESET / 朝一有利区間ランプ消灯**。
- 電源OFF→ONのみ: **天井・内部状態・有利区間ランプ状態を引継ぎ**。
- 据え置き: 純電断との主要進行引継ぎは強く支持されるが、設定変更/据え置き/純電断を3列に分けた本機専用直接表は未取得。distinct unchanged-only contractのみ限定UNVERIFIED。
- 天井: 有利区間移行時に **333G / 555G / 777G** を設定別抽選し、到達後はAT当選濃厚CZ。
- 有利区間移行時状態: 通常/高確/超高確を設定別抽選。
- 変更判別: **朝一有利区間ランプ消灯=設定変更濃厚、点灯=据え置き濃厚**。対策時等例外ありのため確定条件にはしない。
- ガックン固有条件/率、朝一専用AT/CZ直撃率は十分な再探索後もPUBLIC_VALUE_NOT_FOUND。

### 公開朝一数値
#### 状態振り分け（通常 / 高確 / 超高確）
- 設定1: **63.3 / 34.4 / 2.3%**
- 設定2: **61.9 / 35.0 / 3.1%**
- 設定3: **59.9 / 35.8 / 4.3%**
- 設定4: **58.8 / 36.3 / 5.0%**
- 設定5: **56.4 / 37.2 / 6.4%**
- 設定6: **54.6 / 38.0 / 7.5%**

#### 天井振り分け（333G / 555G / 777G）
- 設定1: **2.0 / 18.0 / 80.1%**
- 設定2: **3.9 / 21.1 / 75.0%**
- 設定3: **7.0 / 25.0 / 68.0%**
- 設定4: **9.0 / 27.0 / 64.1%**
- 設定5: **12.1 / 32.8 / 55.1%**
- 設定6: **16.0 / 34.0 / 50.0%**
- 公開丸め値をそのまま保存し、100%へ再正規化しない。

## No.1327 SOURCE UPDATE / DEFINITION NOTES
- 朝一ステージはパチ7が設定変更時 **オフィスステージ** と具体値を掲載する一方、ちょんぼりすた取得版は「調査中」。数値平均や推測はせず `SOURCE_UPDATE_DIFFERENCE` としてレコード内保持。
- 初期概説資料の「天井777G / 777G+α」は最深天井の簡略表記。後発詳細解析の333/555/777G振り分けをcanonicalとし、定義分離した。

## 2019年末～2020年始境界
- 2019-12-22/23「パチスロたまピー」No.1326処理済み。
- 1geki 2019年12月導入カレンダーは12/23たまピーを月内最後のスロット掲載としている。
- 12/24～2020-01-05に追加独立登録すべきパチスロ機を今回の再監査で確認できず、**2019_YEAR_END_BOUNDARY_CLOSED**。
- 2020-01-06群は現時点で2機確認:
  1. **パチスロ1000ちゃん — No.1327 処理済み**
  2. **Sリング 恐襲ノ連鎖 — 次回No.1328候補**

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次の未formalized候補は継承の **`2007-03_wild7.md`（ワイルド7）**。本線を止めず余力リレーで継続。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1327を再取得。
2. **「Sリング 恐襲ノ連鎖」No.1328候補（2020-01-06）** を性能コア＋resetBehavior v0.7で収集。
3. 1/6群を全メーカー/PB/地域差/別型式で再監査し、CLOSED可否を判定。
4. 1/6群CLOSED後、次の日付群へ時系列継続。
5. 遡及QAは `2007-03_wild7.md` から継続。

## 主要出典 — 取得日 2026-09-11

### No.1327 パチスロ1000ちゃん
- オーイズミ公式YouTube: https://www.youtube.com/watch?v=FvTZKhrL_kQ
- PiDEA X: https://www.pidea.jp/articles/aat%E3%81%AE%E3%80%8C1000%E3%81%A1%E3%82%83%E3%82%93%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F
- パチビー発表会: https://www.pachibee.jp/pparticles/view/1192
- パチビー機種情報: https://www.pachibee.jp/machines/kouryaku/219120000
- HAZUSE: https://hazuse.com/machine/pachislot/9S1223/
- HAZUSE設定推測: https://hazuse.com/machine/pachislot/9S1223/genre/208/
- 1geki: https://1geki.jp/slot/s_1000chan/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/98513/comment-page-6/
- パチ7: https://pachiseven.jp/machines_v2/5887
- すろぬー: https://slonuu.com/pg/s-1000chan

### 境界 / 次候補
- 1geki 2019年12月新台カレンダー: https://1geki.jp/newmachinecalender/201912/
- 1geki 2020年1月新台カレンダー: https://1geki.jp/newmachinecalender/202001/
- ちょんぼりすた Sリング 恐襲ノ連鎖: https://chonborista.com/slot/fuji-slot/102105/
- K-Navi Sリング 恐襲ノ連鎖: https://p-kn.com/slot/3357/
