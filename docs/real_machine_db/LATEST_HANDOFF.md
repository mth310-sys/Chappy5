更新日: 2026-09-12

## 現在地点
- recordCount: **1412**
- latestRecordAdded: **豪炎高校應援團 檄 — No.1412**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-05-10_gouen-koukou-ouendan-geki.md`
- chronologicalFrontier: **2021-05-10**
- frontierLatestMachine: **豪炎高校應援團 檄 — No.1412**
- schema: **resetBehavior v0.7**
- status: **2021-05-10_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED_PB_CANDIDATE_FOUND**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1411「SLOTアルドノア・ゼロ」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainはNo.1411まで処理済みだったため、handoff指定の次機種No.1412候補「豪炎高校應援團 檄」から継続。
- No.1412「豪炎高校應援團 檄」を追加。山佐公式、山佐ネクスト、業界記事、HAZUSE、1geki、なな徹、Pachiseven、ちょんぼりすた、パチマガスロマガ、K-Navi、当時立ち回り資料を横断して性能コアとresetBehavior v0.7を収集。
- 型式 `SゴウエンコウコウオウエンダンゲキCC`、検定番号 `0S1087` をHAZUSE機種DBで固定。
- 設定変更時は有利区間・天井・内部モード・絵瑠チャンス・気合ポイント・マサルポイントをRESET。新規有利区間開始後、初回「天丼チャレンジ」を液晶非表示で内部実行する。
- 純電断/据え置きは有利区間・天井・内部モード・各ポイントをCARRY_OVER。ただし朝一の規定ゲーム数カウンターは設定変更/純電断どちらも `???` 表示となるため、表示RESETと内部進行CARRY_OVERを分離して保存。
- 初回天丼チャレンジは5G保証後の継続率80%以上、平均滞在約10G、1Gあたり5〜100G減算。終了後の残りG数別モード移行率も公開数値として保存。
- 有利区間ランプは通常時基本消灯型。朝一消灯だけでは設定変更確定不可。朝一点灯は前日有利区間引継ぎの強い据え置き材料。
- 設定変更専用の独立モード表、CZ高確初期振り分け、本機固有ガックン条件/発生率、設定別AT総初当りは再探索後も固定できず、必要箇所を `UNVERIFIED_AFTER_RESEARCH` / `NO_SEPARATE_RESET_ONLY_TABLE_CONFIRMED_AFTER_RESEARCH` とした。
- 2021-05-10群を閉じるため再監査したところ、一般導入カレンダー2系統ではWUG / アルドノア・ゼロ / 豪炎高校應援團 檄の3機が一致する一方、JPSのPB機 `Sオリスロ4AA / ORIGINAL SLOT4 PLUS` が同日導入としてP-WORLD・解析資料・当時記事に存在することを発見。PBも本DB対象のため未処理候補としてキューへ追加し、群はCLOSEDにせずOPENを維持。
- `Sオリスロ4AA` はP-WORLDで検定番号 `0S1493`、型式 `Sオリスロ4AA`、導入開始 `2021-05-10` を確認。JPSのホールPB機で、ホールにより機種名・パネル名が異なる可能性があるため、次回は同型式派生名を統合/分離判断してから登録する。
- 遡及resetBehavior QAは本線優先のため今回は進めず、前回カーソルを維持。

## No.1412 — 豪炎高校應援團 檄
- path: `docs/real_machine_db/machines/2021-05-10_gouen-koukou-ouendan-geki.md`
- manufacturer: **山佐** / sales: **山佐ネクスト**
- formalModel: **SゴウエンコウコウオウエンダンゲキCC**
- certificationNumber: **0S1087**
- releaseDate: **2021-05-10**
- generation/system: **6.1号機 / AT / 規定ゲーム数管理 / 擬似ボーナス「応援ロード」経由**
- payoutRateBySetting: **97.3 / 98.7 / 100.0 / 103.9 / 106.2 / 110.2%**
- 応援ロード初当り: **1/482.65 / 427.66 / 474.60 / 373.36 / 485.23 / 330.79**
- baseGamesPer50: **設定1約50.01G / 一般表記約51G/50枚**
- netIncrease: **AT 約2.7枚/G**（森羅万象経由時約4.8枚/Gとの解析あり）
- basicPayout: **応援ロード平均約54枚 / 団旗ラッシュ1セット46G+α / 団旗バッシュ1セット20G+α・約86%ST / 熱血BONUS約100枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_AND_HIDDEN_INITIAL_TENDON_NUMERIC_DATA**

### resetBehavior v0.7 — No.1412
- 設定変更: **有利区間・天井・内部モード・絵瑠チャンス・気合pt・マサルpt RESET**。
- 据え置き/純電断: **有利区間・天井・内部モード・各ポイント CARRY_OVER**。
- 朝一表示: 設定変更/純電断とも規定Gカウンター `???`、昼通常ステージ系。表示だけでは判別不可。
- 設定変更後: 新規有利区間の初回天丼チャレンジを液晶非表示で内部実行。
- 初回天丼チャレンジ: **5G保証、継続率80%以上、平均滞在約10G、1Gあたり5〜100G減算**。
- モード別最大規定G: **通常A 800G / 通常B 750G / 通常C 500G / SP 800G**。
- 初回天丼終了時・残りG別モード:
  - ～449G: 通常C 100%
  - 450〜549G: 通常B 50.00% / 通常C 50.00%
  - 550〜649G: 通常A 21.88% / 通常B 50.78% / 通常C 27.34%
  - 650〜749G: 通常A 44.14% / 通常B 39.84% / 通常C 10.94% / SP 5.08%
  - 750G以上: 通常A 57.81% / 通常B 25.00% / 通常C 7.03% / SP 10.16%
- 応援ロードAT非当選後に有利区間継続なら **気合pt引継ぎ＋次回最大規定G500G以下**。
- 有利区間ランプ: 通常時基本消灯。**朝一点灯は据え置き/区間引継ぎの強材料、消灯だけでは設定変更確定不可**。
- 設定変更専用の独立モード振り分け、CZ高確初期振り分け、本機固有ガックンは再探索後も未固定。

## 2021-05-10群 — OPEN / PB再監査中
1. **パチスロ Wake Up, Girls！Seven Memories — No.1410 / DONE**
2. **SLOTアルドノア・ゼロ — No.1411 / DONE**
3. **豪炎高校應援團 檄 — No.1412 / DONE**
4. **Sオリスロ4AA / ORIGINAL SLOT4 PLUS — No.1413候補 / NEXT / JPS PB**

- 一般新台カレンダーでは上3機のみ掲載する資料が複数あるが、PB資料・P-WORLD・2021年機種年鑑では `ORIGINAL SLOT4 PLUS` の存在を確認。
- status: **2021-05-10_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED_PB_CANDIDATE_FOUND**
- `Sオリスロ4AA` はホール法人別名称・パネル派生があり得るため、次回に型式単位で別名を洗い出し、同型式の単一レコードか独立PB派生かを正本ルールに沿って判定する。
- この候補処理後、全メーカー・地域機・PB・別型式・延期差をもう一度監査してCLOSED可否を決める。

## 次回本線の再開地点
- 最新main再同期後、**2021-05-10「Sオリスロ4AA / ORIGINAL SLOT4 PLUS」— No.1413候補**から継続。
- 型式 `Sオリスロ4AA` / 検定番号 `0S1493` / JPS / ノーマル / 2021-05-10導入をP-WORLDで先行確認済み。
- 処理後に2021-05-10群を再監査してCLOSED可否を判定し、その後の本線は2021-05-24群（少なくとも鬼浜爆走紅蓮隊 狂闘旅情編 / チバリヨ-30）へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1412追加 commit: `fdb479f4a43e00aaaa25687b9bfdb72cb1f3c69c`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1412 豪炎高校應援團 檄
- https://www1.yamasa.co.jp/gog/
- https://yamasa-next.co.jp/music-distribution/gog/
- https://www.nikkansports.com/amusement/pachislot/news/202103080000555.html
- https://www.pidea.jp/articles/1614765626
- https://web-greenbelt.jp/post-44912/
- https://hazuse.com/machine/pachislot/0S1087/
- https://hazuse.com/machine/pachislot/0S1087/genre/207/
- https://1geki.jp/slot/s_goeng/
- https://1geki.jp/slot/s_goeng/42/
- https://nana-press.com/kaiseki/machine/120/3780/
- https://nana-press.com/kaiseki/machine/120/3567/
- https://nana-press.com/kaiseki/machine/120/3564/
- https://pachiseven.jp/machines/6283/cutout/8
- https://chonborista.com/slot/yamasa-slot/133450/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/239/kh03.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/239/tj04-1.php
- https://p-kn.com/slot/3567/
- https://slotmethod.jp/archives/6331/

### 2021-05-10群監査 / PB候補
- https://ichikatsu.com/newslot/
- https://www.slopachi-quest.com/article/2021-dounyuukisyu/
- https://hisshobon.news/column/1394/
- https://psumma.jp/pachislo/51658/
- https://chonborista.com/slot/jps-slot/134601/
- https://www.p-world.co.jp/machine/database/9395
- https://galapagosstore.com/web/book/detail/mbj-27424-124121939-001-001
