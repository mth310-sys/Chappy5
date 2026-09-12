更新日: 2026-09-13

## 現在地点
- recordCount: **1505**
- latestRecordAdded: **パチスロ犬夜叉 — No.1505**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-07-04_pachislot-inuyasha.md`
- chronologicalFrontier: **2022-07-04**
- frontierLatestMachine: **パチスロ犬夜叉 — No.1505**
- schema: **resetBehavior v0.7**
- status: **2022-07-04_GROUP_OPEN_3_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1504 `ニューゲッターマウス` を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- mainは前回会話時点のNo.1500より先行してNo.1504まで進んでいたため、既処理1501〜1504へ戻らず最新handoff指定のNo.1505から継続した。
- handoff指定の次機種 No.1505 `パチスロ犬夜叉`（クロスアルファ、2022-07-04）を性能コア＋resetBehavior v0.7で追加。
- 正式型式 `S犬夜叉CAN`、検定番号 `2S0110` をHAZUSEで確認。
- 性能コアは設定1〜6。機械割97.8 / 99.0 / 100.9 / 105.0 / 108.1 / 112.2%。四魂ボーナス1/278→1/247、AT1/457→1/313、約33.6G/50枚、AT純増約1.8枚/G、疑似ボーナス約5.0枚/G。
- 四魂ボーナス約50枚、AT初期20/30/40G+α。AT中ボーナスは50/100/200枚を基本とする。
- 通常ゲーム数天井は最大666Gで四魂ボーナス、四魂ボーナス回数天井は最大8回目でAT。
- resetBehaviorは設定変更で有利区間・天井・内部モード・内部状態RESET。据え置き/純電源OFF→ONではCARRY_OVERを複数解析で照合。
- 設定変更時はAT当選までの四魂ボーナス規定回数が優遇され、**50%以上で3回以内**が選択される。
- 設定変更時の内部状態振り分けも公開値を保存。設定1〜3は通常93.4/高確6.3/超高確0.4%、設定4〜5は85.9/12.5/1.6%、設定6は82.8/15.6/1.6%。
- 通常G数天井666Gそのものの固定リセット短縮は確認できず、スルー回数優遇と分離した。
- 有利区間ランプは通常時に点灯しないため、ランプ単独での設定変更判別は困難。
- 月表示は設定変更・純電断後とも殺生丸画面へ変化。1回目の鉄砕牙チャンス終了時犬夜叉アイキャッチは変更可能性UP、初回殺生丸pt獲得時に半月以上へ昇格は据え置き可能性UPとHAZUSEが整理。
- 2022年機固有ガックン、設定変更後開始ステージ、設定変更専用の内部モード全振り分け、朝一特定G以内AT当選率は検索語・資料系統を変更して再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 旧5号機「犬夜叉」および2024年「犬夜叉2」の情報は別機種として混入させていない。

## No.1505 — パチスロ犬夜叉
- path: `docs/real_machine_db/machines/2022-07-04_pachislot-inuyasha.md`
- manufacturer: **クロスアルファ**
- formalModel: **S犬夜叉CAN**
- inspectionCode: **2S0110**
- releaseDate: **2022-07-04**
- generation/system: **6.5号機 / AT / 疑似ボーナス / CZ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 99.0 / 100.9 / 105.0 / 108.1 / 112.2%**
- shikonBonus: **1/278 / 1/276 / 1/271 / 1/261 / 1/252 / 1/247**
- AT: **1/457 / 1/439 / 1/413 / 1/365 / 1/334 / 1/313**
- baseGamesPer50: **約33.6G/50枚**
- netIncrease: **AT約1.8枚/G / 疑似ボーナス約5.0枚/G**
- basicPayout: **四魂ボーナス約50枚 / AT初期20・30・40G+α / AT中ボーナス50・100・200枚**
- ceiling: **通常最大666G→四魂ボーナス / 四魂ボーナス最大8回目→AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE / HIGH_RESET / HIGH_MODEL_CODE**

### resetBehavior v0.7 — No.1505
- **設定変更**: 有利区間・天井・内部モード・内部状態RESET。四魂ボーナス規定回数を再抽選。
- **据え置き**: 有利区間・天井・内部状態CARRY_OVER。内部モードも引継ぎとして扱う。
- **純電源OFF→ON**: 有利区間・天井・内部モード・内部状態CARRY_OVER。月表示は殺生丸画面へ変化。
- **ゲーム数/天井**: 通常最大666Gで四魂ボーナス。通常は四魂ボーナス最大8回目でAT。
- **リセット時天井差**: 固定G数短縮はNONE_CONFIRMED。AT規定回数は**50%以上で3回以内**へ優遇。
- **モード/状態**: 設定変更で再抽選。初期状態は設定1〜3=93.4/6.3/0.4%、設定4〜5=85.9/12.5/1.6%、設定6=82.8/15.6/1.6%（通常/高確/超高確）。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。
- **朝一恩恵**: 四魂ボーナス規定回数優遇、高設定ほど高確以上スタート率UP。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 通常時有利区間ランプでは困難。犬夜叉アイキャッチ/初回殺生丸pt月形状に判別材料あり。固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 50%以上で四魂ボーナス3回以内、設定別初期内部状態振り分けを保存。

## 2022-07-04群 — OPEN 3/5
月間監査・別系統資料で確認済みの5機:
1. `パチスロ甲鉄城のカバネリ` — **No.1503 処理済み**
2. `ニューゲッターマウス` — **No.1504 処理済み**
3. `パチスロ犬夜叉` — **No.1505 処理済み**
4. `パチスロ アクエリオン ALL STARS` — **次回 No.1506候補**
5. `スーパーハナハナ2-30`

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）**。
- 今回は本線No.1505の性能コア＋resetBehavior調査を優先し、遡及QAカーソルは変更していない。

## 次回本線の再開地点
- **No.1506候補 `パチスロ アクエリオン ALL STARS` — 2022-07-04。**
- その後 `スーパーハナハナ2-30` を処理し、5/5後にPB・別型式・地域先行・延期/段階導入を含むCLOSED監査を行う。

## GitHub保存
- No.1505追加 commit: `42d7e35ce21ecd060f308f2c88558c770b81d23e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1505 パチスロ犬夜叉
- https://yugi-nippon.com/pachinko-new-machine/post-52472/
- https://news.p-world.co.jp/articles/20751/nippon
- https://news.p-world.co.jp/articles/20734/yugitsushin
- https://news.p-world.co.jp/articles/20754/greenbelt
- https://hazuse.com/machine/pachislot/2S0110/genre/201/
- https://hazuse.com/machine/pachislot/2S0110/genre/207/
- https://hazuse.com/machine/pachislot/2S0110/genre/209/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/crossalpha_slot/01/kr01-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/crossalpha_slot/01/bn01.php
- https://nana-press.com/kaiseki/machine/382/10512/
- https://nana-press.com/kaiseki/machine/382/10192/
- https://p-kn.com/slot/3805/
- https://chonborista.com/slot/spiky/167769/
- https://www.pachinow.jp/s1/inuyasha-index.php
