更新日: 2026-09-12

## 現在地点
- recordCount: **1467**
- latestRecordAdded: **聖闘士星矢 冥王復活 — No.1467**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_saint-seiya-meiou-fukkatsu.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **聖闘士星矢 冥王復活 — No.1467**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_4_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1466「パチスロディスクアップ2」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `聖闘士星矢 冥王復活 / S聖闘士星矢冥王復活JH / 1S0875` をNo.1467へ追加。
- 性能コアはHAZUSE、P-WORLD/遊技通信、一撃、なな徹、パチマガスロマガ、複数解析サイトで照合。
- resetBehavior v0.7では設定変更時の有利区間・天井・内部モード/状態・小宇宙ポイント・不屈ポイントRESET、据え置き/純電源OFF→ON時のCARRY_OVERを確認。
- 朝一主要差分として、設定変更後・AT後初回のCZ天井短縮（通常A 548G、通常B/C/SP 598G、RUSH準備798G）、設定変更時のみの阿頼耶識モード抽選、通常時有利区間ランプによる変更判別を保存。
- 阿頼耶識モード突入率5%は解析サイト公開値として信頼度を分離。モード自体は設定変更まで維持される一方、阿頼耶識ランプは電源OFF→ONで消灯するとの解析も記録。
- 本機固有ガックン条件/発生率と、設定変更後の通常A/B/C/SP/RUSH準備の正確な全振り分けは検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 遡及resetBehavior QAカーソルは本線優先のため進めず、`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）を維持。

## No.1467 — 聖闘士星矢 冥王復活
- path: `docs/real_machine_db/machines/2022-01-24_saint-seiya-meiou-fukkatsu.md`
- manufacturer: **三洋物産**
- formalModel: **S聖闘士星矢冥王復活JH**
- certificationNumber: **1S0875**
- releaseDate: **2022-01-24**
- generation/system: **6.2号機 / AT / CZ突破型 / 差枚数上乗せ**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **L 86.4 / 1 97.4 / 2 101.1 / 4 106.1 / 5 108.0 / 6 110.0%**
- CZ: **1/330.7 → 1/222.2（設定1→6）**
- AT: **1/562.8 → 1/366.3（設定1→6）**
- baseGamesPer50: **約39.0〜39.2G/50枚**
- netIncrease: **AT 約3.2枚/G**
- basicPayout: **設定1 AT平均獲得約665枚 / 天馬降臨平均上乗せ約300枚**
- normalCeiling: **CZ間最大798G / 有利区間開始2100GでAT / CZ最大9スルー後の次回CZ勝利濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_FOR_YARDSTICK**
- confidence: **HIGH_CORE_HIGH_RESET**

### resetBehavior v0.7 — No.1467
- **設定変更**: 有利区間、天井、内部モード、内部状態、小宇宙ポイント、不屈ポイントをRESET。基本は瞬ステージ。
- **据え置き**: 天井、内部モード/状態、阿頼耶識モード、小宇宙ポイント、不屈ポイント、有利区間をCARRY_OVER。
- **純電源OFF→ON**: 上記内部進行をCARRY_OVER。阿頼耶識ランプは消灯するとの解析があるが、阿頼耶識モード自体は設定変更まで継続。
- **朝一CZ天井短縮**: 初回は通常A 548G、通常B/C/SP 598G。RUSH準備のみ798G。
- **AT天井**: 有利区間開始から2100G。
- **阿頼耶識モード**: 設定変更時のみ突入抽選。解析公開値5%。突入後は次回設定変更まで継続。設定1滞在時PAYOUT 105.4%。
- **変更判別**: 通常時有利区間ランプ点灯型。未対策なら朝一消灯＝設定変更濃厚 / 点灯＝据え置き濃厚。店側対策や前日終了状態は例外。
- **ガックン**: 本機固有条件/発生率は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467 / DONE**
5. **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468候補 / NEXT**
6. **アラジンAクラシック**
7. **南国物語30**
8. **ハイスクールD×D2 ハーレム王に俺はなる**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1468候補「新世紀エヴァンゲリオン～魂の共鳴～」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）**。
- 今回は本線No.1467を優先し、遡及QAは未処理。

## GitHub保存
- No.1467追加 commit: `1a13dc7009fb6b49a06ca480a13b61f7ac62091f`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1467 聖闘士星矢 冥王復活
- https://hazuse.com/machine/pachislot/1S0875/
- https://hazuse.com/machine/pachislot/1S0875/genre/209/
- https://1geki.jp/slot/s_seiya_meioh/
- https://1geki.jp/slot/s_seiya_meioh/3/
- https://nana-press.com/kaiseki/machine/221/7620/
- https://nana-press.com/kaiseki/machine/221/7616/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/37/tj08-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/37/tj15.php
- https://slot-seven.com/seintoseiyameiofukkatu-tenzyou/
- https://news.p-world.co.jp/articles/18383/yugitsushin
- https://www.slopachi-quest.com/article/saintseiya-meiouhukkatu-settei/
