更新日: 2026-09-12

## 現在地点
- recordCount: **1426**
- latestRecordAdded: **パチスロコードギアス 反逆のルルーシュ3 — No.1426**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-08-02_code-geass-hangyaku-no-lelouch-3.md`
- chronologicalFrontier: **2021-08-02**
- frontierLatestMachine: **パチスロコードギアス 反逆のルルーシュ3 — No.1426**
- schema: **resetBehavior v0.7**
- status: **2021-08-02_GROUP_OPEN_3_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1425「もっと！クレアの秘宝伝 女神の歌声と太陽の子供達」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-08-02群の3機目としてNo.1426「パチスロコードギアス 反逆のルルーシュ3」を追加。
- 群は引き続き **まどか前後編 / もっと！クレア / コードギアス3 / GI優駿倶楽部3** の4ユニーク機を既知キューとして保持。3/4処理済みでOPEN。

## No.1426 — パチスロコードギアス 反逆のルルーシュ3
- path: `docs/real_machine_db/machines/2021-08-02_code-geass-hangyaku-no-lelouch-3.md`
- manufacturer: **銀座（Sammyブランド）**
- formalModel: **Sコードギアス反逆のルルーシュ3KZ**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-08-02**
- generation/system: **6.1号機 / A+AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 101.5 / 106.3 / 109.5 / 112.1%**
- AT初当たり: **1/594.0 / 1/565.9 / 1/517.8 / 1/437.0 / 1/383.1 / 1/322.0**
- 通常時ボーナス: **1/250.7 / 1/247.4 / 1/242.1 / 1/238.5 / 1/230.7 / 1/222.1**
- AT中ボーナス: **1/199.0 / 1/196.7 / 1/193.1 / 1/191.4 / 1/186.1 / 1/178.8**
- baseGamesPer50: **約36.2G/50枚**
- basicPayout: **HYPER BIG約150枚 / BIG約115枚 / REG約50枚**
- AT: **純増約2.0枚/G / BLACK REBELLION 1セット40G+α**
- ceiling: **新規有利区間移行後500G+α → 成功期待度が高いCZ「戦略戦」**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1426
- **設定変更**: 有利区間RESET、内部天井RESET、内部状態再抽選。新規有利区間移行時は必ず高確スタート。
- **据え置き/純電源OFF→ON**: 内部天井・内部状態・進行中有利区間はCARRY_OVER。RT状態も電断/据え置き側は引継ぎ資料あり。
- **天井**: 有利区間移行後500G+αで天井用「戦略戦CZ」。+αは主に有利区間移行までの2～3G。CZ/CZ前兆中到達時は終了後に発動。
- 天井用戦略戦CZの成功期待度は **設定1で45.0%** とする1geki自社調査値を公開朝一/天井比較値として保存。
- 設定変更専用の固定短縮天井は確認できず、新規有利区間の通常天井500G+αを使用。
- **変更判別**: 設定変更時は有利区間ランプ消灯だが、本機は通常時消灯型のため **朝一消灯だけでは変更判別不可**。
- 設定変更後の開始ステージは実戦上「夕方・自宅」報告あり。ただし解析確定値ではないためEMPIRICAL扱い。
- 設定変更時のRT状態の直接契約、本機固有ガックン条件・発生率、設定変更専用モード振り分け率/専用初当たり率、検定番号は、検索語・資料系統を変更して再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- メーカー表記はSammy資料が多い一方、検定通過・製造元は銀座名義のため、`manufacturer=銀座 / brandContext=Sammy` と分離した。

## 2021-08-02群 — OPEN
1. **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 — No.1424 / DONE**
2. **もっと！クレアの秘宝伝 女神の歌声と太陽の子供達 — No.1425 / DONE**
3. **パチスロコードギアス 反逆のルルーシュ3 — No.1426 / DONE**
4. **GI優駿倶楽部3 — NEXT / No.1427候補**
- 4機処理後、全メーカー・別型式/PB・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-08-02群の次の未処理「GI優駿倶楽部3」No.1427候補**から継続。
- 処理後、同日群の全メーカー・別型式/PB・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存性能コアは不用意にやり直さず、reset側のみ正式再探索する。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）**。

## GitHub保存
- No.1426追加 commit: `c3a580cf36eccfa5a404c8ac58046d5f7503f076`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1426 コードギアス3
- https://web-greenbelt.jp/post-49418/
- https://p-kn.com/slot/3617/
- https://1geki.jp/slot/s_codegeass3/
- https://1geki.jp/slot/s_codegeass3/3/
- https://1geki.jp/slot/s_codegeass3/40/
- https://slot-seven.com/codegiass3-tenzyou/
- https://ichikatsu.com/codegeass3/
- https://pachinko-curation.com/1161/
- https://p-media.info/post-26564/

### 次回境界 2021-08-02
- https://ichikatsu.com/newslot/
- https://p-kn.com/slot/3611/
- https://www.4gamer.net/games/999/G999905/20210721187/
