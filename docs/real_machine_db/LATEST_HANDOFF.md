更新日: 2026-09-12

## 現在地点
- recordCount: **1415**
- latestRecordAdded: **チバリヨ-30 — No.1415**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-05-24_chibariyo-30.md`
- chronologicalFrontier: **2021-05-24**
- frontierLatestMachine: **チバリヨ-30 — No.1415**
- schema: **resetBehavior v0.7**
- status: **2021-05-24_GROUP_CLOSED_AFTER_REGIONAL_STAGED_RELEASE_AUDIT**

## 今回の同期 / 進捗
- 最新mainを再取得したところ前回会話地点No.1410より先行し、No.1414「鬼浜爆走紅蓮隊 狂闘旅情編」まで処理済みだったため重複登録せずNo.1414から継続。
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1414レコードを確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-05-24群の残り `チバリヨ-30` をNo.1415として追加。
- NET公式、HAZUSE、P-WORLD、当時導入/業界記事、1geki、必勝本系、ちょんぼりすた、旧新台一覧を横断し、性能コアとresetBehavior v0.7を同時収集。
- 導入日は **2021-05-24 / 2021-06-07** の資料差を確認。5/24を先行/初回市場導入、6/7を全国・一般導入とする段階導入差として保持し、最初に確認できる市場導入日5/24をcanonicalとした。6/7に同一型式を重複登録しない。
- 設定変更は天井・内部状態/モード・有利区間RESET、据え置き/純電断はCARRY_OVER。有利区間移行時は全設定共通で50%以上が天国チャンスA/Bまたはパトランプ準備となる公開数値を保存。
- 設定変更専用の固定短縮天井は確認できず。朝一32G期待は優遇モード抽選と区別し、「32Gリセット天井」と誤登録しない。
- 本機固有ガックン条件/発生率と、設定変更時の天国チャンスA/B/パトランプ準備の個別振り分け率は検索語・型式・メーカー・資料系統を変えて再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 2021-05-24群は当時新台カレンダーで鬼浜/チバリヨの2機が一致。地域先行・30Φ・段階導入を再監査し、新たな独立型式を固定できなかったためCLOSED。
- 遡及resetBehavior QAは本線優先のため今回は進めず、既存カーソル「アストロ球団」を維持。

## No.1415 — チバリヨ-30
- path: `docs/real_machine_db/machines/2021-05-24_chibariyo-30.md`
- manufacturer: **ネット（製造: オーゼキ）**
- formalModel: **SチバリヨZH-30**
- certificationNumber: **1S0017**
- releaseDate: **2021-05-24 canonical / 2021-06-07 nationwide staged rollout**
- generation/system: **6.1号機 / AT / 30Φ / 完全告知 / 擬似ボーナス連チャン**
- payoutRateBySetting: **97.9 / 99.2 / 101.1 / 103.2 / 105.3 / 107.5%**
- initialHitBySetting: **1/240 / 1/235 / 1/221 / 1/207 / 1/193 / 1/189**
- baseGamesPer50: **約33.7G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G・約210枚 / REG 30G・約90枚**
- normalCeiling: **最大900Gまたはチェリー最大40回成立**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABLE_RESET_CORE_WITH_EXACT_MODE_SPLIT_UNVERIFIED**

### resetBehavior v0.7 — No.1415
- 設定変更: **天井進行RESET / 内部状態・モード再抽選 / 有利区間RESET**。
- 据え置き: **天井・内部状態/モード・有利区間CARRY_OVER**。
- 純電断: **天井・内部状態CARRY_OVER**。有利区間もランプ/据え置き挙動と整合する引継ぎとして保存。
- ceilingAfterReset: **設定変更専用の固定短縮天井は確認できない**。通常の最大900G/40チェリー天井を0から再開。
- modeAfterReset / numericResetData: **有利区間移行時、全設定共通で50%以上が天国チャンスA / 天国チャンスB / パトランプ準備のいずれか**。個別3モード振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- resetDetection: 通常時有利区間ランプ点灯型のため、未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。前日消灯閉店や店側対策等の例外あり。
- ガックン: 本機固有の高信頼直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-05-24群 — CLOSED
1. **鬼浜爆走紅蓮隊 狂闘旅情編 — No.1414 / DONE**
2. **チバリヨ-30 — No.1415 / DONE**

- 当時カレンダーで5/24のパチスロ新台として上記2機を確認。
- `チバリヨ-30` は資料により6/7掲載もあるが同一型式の全国段階導入であり、6/7に重複登録しない。
- status: **2021-05-24_GROUP_CLOSED_AFTER_REGIONAL_STAGED_RELEASE_AUDIT**

## 次回本線の再開地点
- 最新main再同期後、**2021-05-25〜2021-06-06境界を短く再監査 → 2021-06-07「パチスロガールズ＆パンツァー 劇場版」— No.1416候補**から継続。
- 2021-06-07カレンダーでは5スロット掲載のうち `チバリヨ-30` はNo.1415で段階導入処理済み。同日未処理の独立機種として少なくとも以下を固定:
  1. **パチスロガールズ＆パンツァー 劇場版 — No.1416候補 / NEXT**
  2. **パチスロガメラ — No.1417候補 / PENDING**
  3. **パチスロ鉄拳4デビルVer. — No.1418候補 / PENDING**
  4. **パチスロ 百花繚乱 サムライガールズ — No.1419候補 / PENDING**
- 6/7群処理時もPB・地域先行・別型式・延期/段階導入を再監査して群CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1415追加 commit: `cb29803df93950b32235f004975655274e67d567`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1415 チバリヨ-30
- https://www.net-fun.co.jp/CBR-30_2021/
- https://www.net-fun.co.jp/topic/
- https://hazuse.com/machine/pachislot/1S0017/
- https://www.p-world.co.jp/machine/database/9392
- https://pachinkopachisro.com/archives/55655669.html
- https://pachibee.7world.jp/machines/index/4854
- https://hisshobon.news/pachislot/17161/
- https://1geki.jp/slot/s_chibariyo30/
- https://1geki.jp/slot/s_chibariyo30/82/
- https://1geki.jp/slot/s_chibariyo30/83/
- https://1geki.jp/slot/s_chibariyo30/84/
- https://chonborista.com/slot/net-slot/138518/
- https://ichikatsu.com/newslot/
- https://slot-seven.com/chibariyo30-tenzyou/

### 2021-06-07次群先行確認
- https://1geki.jp/newmachinecalender/202106/
- https://1geki.jp/slot/s_ggp/
- https://1geki.jp/slot/s_tekken4d/
