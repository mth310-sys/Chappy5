更新日: 2026-09-11

## 現在地点
- recordCount: **1283**
- latestRecordAdded: **パチスロ ボンバーパワフルIII**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-05-07_bomber-powerful-3.md`
- chronologicalFrontier: **2019-05-07**
- frontierLatestMachine: **パチスロ ボンバーパワフルIII — No.1283**
- schema: **resetBehavior v0.7**
- status: **2019-05-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1282を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoff指定の2019-05-07群未処理 `パチスロ ボンバーパワフルIII` をNo.1283として性能コア + resetBehavior v0.7で登録。
- SANKYO公式 / HAZUSE / DMMぱちタウン / P-WORLD / 遊技通信 / グリーンべると / 一撃 / ちょんぼりすた / K-Navi / 2019導入カレンダーを横断。
- 導入日は2019-05-06 / 2019-05-07の資料差を保持し、多数資料一致・公式2019.05との整合から2019-05-07をcanonical。2019-04-22表記は外れ値CONFLICTとして別保持。
- 5/7群は導入カレンダーと個別機種資料でジャングルマスターコングダム / ボンバーパワフルIIIの2機を確認。追加の同日別型式・別スペック・PB・地域差を固定できずCLOSED。
- 遡及resetBehavior QAでは `2007-02_pikaslo.md` を再探索枯渇結果どおり `PARTIAL_RESEARCH_EXHAUSTED` として正式保存。

## No.1283 — パチスロ ボンバーパワフルIII
- manufacturer: **SANKYO**
- formalModel: **`Sボンバーパワフル3V`**（公式表記 `Sボンバーパワフル3 V`）
- certificationNumber: **`8S0924`**
- generation/system: **6号機 / AT / 疑似ボーナス / CZ / 6段階設定**
- releaseDate canonical: **2019-05-07**
- 機械割: **97.7 / 99.7 / 101.9 / 104.4 / 107.7 / 112.1%**
- CZ: **1/162 / 1/160 / 1/158 / 1/157 / 1/156 / 1/149**
- 通常時ボーナス初当たり: **1/324 / 1/303 / 1/278 / 1/252 / 1/226 / 1/160**
- AT初当たり: **1/691 / 1/638 / 1/576 / 1/514 / 1/448 / 1/229**
- baseGamesPer50: **約49.4G**
- AT / 疑似ボーナス純増: **約3.2枚/G**
- AT「パワフルタイム」: **1セット25G / 平均継続率約85%（セット上乗せ・引き戻し込み）**
- 通常時CZ「シャッターチャンス」: **10G / ボーナス期待度約45%**
- game ceiling: **有利区間移行後900G → ボーナス当選濃厚CZ**
- CZ skip ceiling: **4回連続失敗後の5回目CZでボーナス当選濃厚**

### resetBehavior v0.7
- settingChange: **天井G数 / CZ回数 / ポイント / メニュー情報をRESET**。DMMは「すべての状態がリセット」。通常時は市街地（昼）開始。
- carryOver: 据え置き単独の全項目直接記述は限定的だが、純電断の直接資料で主要進行値の保持を確認。
- powerCycle: **天井G数 / CZ回数をCARRY_OVER**。ポイント表示は0へ戻るが**内部ポイントはCARRY_OVER**。通常時は市街地（昼）開始。ボムボムチャージ/CZ/ボーナス/AT中の電断は当該状態を引き継ぐ資料あり。
- gameCounterReset: 設定変更=RESET / 純電断=CARRY_OVER。通常天井900G。
- ceilingAfterReset: リセット専用短縮天井は `NO_SHORTENING_CONFIRMED`。通常900Gをゼロから再計測。
- mode/stateAfterReset: 設定変更で主要状態RESET。有利区間移行時は高確スタートの解析あり。設定変更専用の詳細モード振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- advantageousSectionReset: DMMで設定変更時は非有利区間へ移行し、高確から開始。CZスルー回数は有利区間終了でRESET。純電断は進行値CARRY_OVER。
- resetBenefits: 有利区間移行時の高確スタートを確認。設定変更専用短縮天井・AT/CZ確定恩恵は確認なし。
- resetPenalties: 設定変更により育った天井G / CZスルー回数 / 内部ポイントを失う。
- resetDetection: 設定変更・純電断とも通常時は市街地（昼）開始のためステージ単独判別不可。0pt表示も純電断で内部ポイントを引継ぐため確定材料にならない。本機固有ガックン率/確定条件は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 設定変更専用モード振り分け・短縮天井・初当たり率などは `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。

## qualityNotes / conflicts
- `CONFLICT_RELEASE_DATE_2019_05_06_VS_2019_05_07`
- `CONFLICT_OUTLIER_RELEASE_DATE_2019_04_22`
- モゲスロのメーカー欄 `SANYO` はSANKYO公式・K-Navi・機種DBと競合するため `SOURCE_TYPO_MANUFACTURER_SANYO_VS_OFFICIAL_SANKYO`。
- 型式名の空白有無 `Sボンバーパワフル3 V` / `Sボンバーパワフル3V` は表記差として扱う。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: main上の導入時系列でPIKASLO直後の未QAレコードを特定し、同じv0.7全項目契約で継続。前進キューを優先し、retro QAで本線を止めない。

## 2019-05-07群 — CLOSED
### 登録済み
- No.1282 ジャングルマスターコングダム
- No.1283 パチスロ ボンバーパワフルIII

### 群監査
- モゲスロ2019導入カレンダーは5/7に上記2機を掲載。
- 両機の個別資料でも2019-05-07導入を確認。
- 追加の同日パチスロ、別型式、別スペック、PB、地域差を今回の横断検索で固定できず `2019-05-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1283を再取得。
2. 2019-05-08〜05-19境界を短く再監査。
3. **2019-05-20群**へ進み、第一候補 **天晴！モグモグ風林火山〜全国制覇版〜** をNo.1284候補として性能コア + resetBehavior v0.7で処理。
4. 同日確定候補 **ハナビ通 / ぱちスロ 冬のソナタ** を順次処理し、5/20群を全メーカー/別型式/別スペック/PB/地域差まで監査してCLOSED可否を判定。
5. 遡及QAはPIKASLO直後の未QAレコードから継続。

## 主要出典 — 取得日 2026-09-11
### パチスロ ボンバーパワフルIII
- SANKYO公式: https://www.sankyo-fever.jp/collection/890/
- HAZUSE: https://hazuse.com/machine/pachislot/8S0924/
- DMMぱちタウン: https://p-town.dmm.com/machines/3416
- P-WORLD: https://www.p-world.co.jp/machine/database/8918
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/10926/yugitsushin
- グリーンべると: https://web-greenbelt.jp/00011220/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/80592/
- 一撃 AT概要: https://1geki.jp/slot/s_bomp3/81/
- 一撃 状態移行: https://1geki.jp/slot/s_bomp3/45/
- K-Navi: https://p-kn.com/slot/3230/
- モゲスロ2019導入カレンダー: https://moge-site.com/new-slot2019

### 次群確認
- モゲスロ2019導入カレンダー: https://moge-site.com/new-slot2019
- 天晴！モグモグ風林火山 解析: https://www.slopachi-quest.com/article/mogumoguhuurin-zennkokuseiha/
- ぱちスロ 冬のソナタ K-Navi: https://p-kn.com/slot/3233/
