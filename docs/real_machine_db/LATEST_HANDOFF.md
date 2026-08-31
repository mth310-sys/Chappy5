# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は194件目 `CANスロ`（オルカ）。
- 直前handoffが最優先指定した遡及漏れ `南国姉妹-30`（アスワン東京）を、性能コア + v0.7 resetBehaviorまで検索語・資料系統を変えて再探索した。
- **195件目として `南国姉妹-30` を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-18_nangoku-shimai-30.md`
- coreStatus: `PARTIAL_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `03039cbb499f7ba2eaba206b50c82bb853938684`

## 195. 南国姉妹-30

- manufacturer: アスワン東京
- releaseDate: `CONFLICT（当時資料 2007-09-18発売 / 後年DB 2007-10導入）`
- generation: 5号機初期
- systemType: A+RT / 完全告知 / 30φ
- status: `PARTIAL_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- パチスロ業界初まとめの2007-09-11更新は `南国姉妹/-30` を **2007/9/18発売** と記録。
- 同サイトの2007-10-01更新でも、25φ版 `南国姉妹` は10/1発売、30φ版は9/18発売済みと明記。
- PACNK 2007年度一覧は `南国姉妹-30` を **2007年9月** と整理。
- 一方、スロリスクタイムの後年DBは **2007/10** と整理。
- 発売日/市場導入月の定義差で両立する可能性はあるが、平均せず `CONFLICT` を維持する。

### 性能コア

30φ版そのものから直接確認できた値:

- 赤7 BIG: 348枚を超える払い出しで終了。
- 青7 BIG: 348枚を超える払い出しで終了。
- CHALLENGE BONUS: 132枚を超える払い出しで終了。
- 完全告知、RT `スーパーウェーブタイム（SWT）` 搭載。
- K-Naviは赤7後SWT中のボーナスGET率を80%強と説明。

30φ版の設定別BIG/CB確率・設定別機械割はK-Naviが全設定「未発表」としており、別解析/旧DB/回顧まで再探索しても30φ版固有値を確定できなかった。

パチマガスロマガには25φ版 `南国姉妹` の詳細解析値（設定別確率、PAYOUT、1000円G）が現存するが、30φ版と同一性能であることを直接確認できる高信頼資料がないため、**別スペック流用を避けて30φレコードへは転記していない**。参考値としてのみレコード内に保持した。

- payoutRateBySetting: `UNVERIFIED（30φ）`
- initialHitBySetting: `UNVERIFIED（30φ）`
- baseGamesPer50: `UNVERIFIED（30φ）`
- RT純増枚数/G: `UNVERIFIED（30φ）`

### RTゲーム数 CONFLICT

K-Navi（30φ専用）:
- 赤7 BIG後: RT 200G
- 青7 BIG後: RT 200G
- CHALLENGE BONUS後: RT 100G

P-WORLD（30φ専用）:
- 赤7 BIG後: RT 200G
- 青7 BIG後: RT 100G
- CHALLENGE BONUS: 132枚超払い出し終了のみでRT付与の記載なし

赤7後200Gのみ一致。青7後とCB後は解消できないため、平均・推定せず `CONFLICT` とした。

### v0.7 resetBehavior

`南国姉妹-30 / 南国姉妹30 / 南国姉妹 / アスワン東京` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / SWT / 天井 / ガックン` を組み替え、攻略・旧DB・掲示板・後年回顧も横断した。

- settingChangeBehavior: 正規30φ版の設定変更時RT/初期状態は `UNVERIFIED`。
- carryOverBehavior: 据え置き時RT残G/内部RT状態は `UNVERIFIED`。通常ゲーム数天井は `NONE_CONFIRMED`。
- powerCycleBehavior: 電源OFF→ONのみ時のRT状態処理は `UNVERIFIED`。
- gameCounterReset: 正規仕様の通常時ゲーム数天井/周期カウンタ `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更専用振り分け `NONE_CONFIRMED`。
- stateAfterReset: RT/SWT中設定変更時の残G/内部状態は `UNVERIFIED`。通常時の高確/低確等は `NONE_CONFIRMED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/ランプ差等は `UNVERIFIED`。
- numericResetData: 公開朝一数値、短縮天井G、変更時モード振り分け等 `NONE_CONFIRMED`。

P-WORLD掲示板に1000G版/1300〜1400G版という天井のユーザー投稿があるが、後年の実機所有回顧で裏物基板の存在も確認できるため、正規30φ仕様の性能値・天井根拠としては採用していない。

### 主要出典

- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html
- K-Navi 南国姉妹-30: https://p-kn.com/slot/655/
- P-WORLD 南国姉妹-30: https://www.p-world.co.jp/machine/database/4949
- PACNK 2007年度一覧: https://pacnk.com/photoslot/plist2007_0_0.html
- スロリスクタイム一覧: https://pachisuro100.com/itiran/
- パチマガスロマガ 南国姉妹（25φ参考）基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aswan_slot/01/a.php
- パチマガスロマガ 南国姉妹（25φ参考）確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aswan_slot/01/h.php
- パチマガスロマガ 南国姉妹（25φ参考）1000円G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aswan_slot/01/c.php

取得日: 2026-09-01

## 新たに見つかった遡及漏れ — 次回最優先

今回の9月境界再監査で、main未登録の **`トリプルクラウンS2-30`（清龍ゲームジャパン）** を確認した。

- GitHub mainを機種名で検索したが独立レコードなし。
- 2007-08-24付グリーンべると当時記事は、清龍ゲームジャパンが `トリプルクラウンS2-30` を発表し、**2007年9月17日から納品** と明記している。
- 後年DBには2007年9月/2007年10月の表記差があるため、導入時期は再監査して必要なら `CONFLICT`。
- パチマガスロマガに同機専用ページが現存し、設定別ボーナス確率・PAYOUT・小役/ベース系値を取得できる見込み。
- パチマガスロマガ機種トップには `攻め時・ヤメ時・設定変更時→特にナシ` の記述も確認できる。
- **次回は時系列漏れ防止を優先し、195件地点から `トリプルクラウンS2-30` を性能コア + v0.7 resetBehaviorまで処理する。**

主要候補出典:
- グリーンべると 2007-08-24: https://web-greenbelt.jp/00004271/
- パチマガスロマガ トリプルクラウンS2-30: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/01/seiryu_slot_01.php
- スロリスクタイム等の後年一覧は導入月競合監査用に使用する。

## resetBehavior 遡及QA

- 既存QAの次の最古resetBehavior欠損候補は `電撃フランケン`（2006-07-24）。
- 新規本線を止めず、QAリレー時にここから再開する。

## 次回再開地点

1. **LATEST_HANDOFF基準195件地点から継続。**
2. 最優先で遡及漏れ `トリプルクラウンS2-30`（清龍ゲームジャパン、当時記事では2007-09-17納品開始）を処理する。
3. 同機の設定別性能コア、30φ固有値、導入月差、v0.7 resetBehaviorを複数ソースで照合する。
4. その後、2007-10-23〜10月末の残機種監査へ戻り、11月境界へ前進する。
5. `CANスロ` の2007-10-29発売 / 2007-11導入は追加一次資料が出るまで `CONFLICT` を維持する。
6. `南国姉妹-30` は30φ固有の設定別確率/機械割/ベースが未確認。25φ値を流用しない。RT青7/CBの資料差も `CONFLICT` 維持。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
8. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は流用しない。
