# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **320 `いみそ～れ2ピュアエディション25`（エマ / 2008-12-08）**。
- 今回、直前handoff最優先候補 **321 `いみそ～れ2ピュアエディション30`（エマ / 2008-12-08）** を追加。
- グリーンべると当時記事で、ピュア・エディション『プレミアムビスカス』に25φ/30φ双方が存在することを確認。後年一覧でも25/30を別機種名として掲載するため、全機種方針に従い30φを独立レコード化。
- ただし30φ固有の型式/固有スペック表は未回収。25φP-WORLD/pacnk値を30φ固有値として自動転記せず、パチマガスロマガが径を分けず掲載する『ピュアエディション』共通解析値だけを `ANALYSIS_SINGLE_EDITION_COMMON` と明示して採用。

## 321. いみそ～れ2ピュアエディション30

- record: `docs/real_machine_db/machines/2008-12_imisore2-pure-edition-30.md`
- manufacturer: エマ
- modelNumber: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate: **2008-12-08**。ALL7が『いみそ～れ2 ピュアエディション プレミアムビスカス』を同日導入予定とし、グリーンべるとが同プレミアムビスカスに25φ/30φ双方があることを当時記事で明記。
- generation: 5号機
- systemType: **ノーマル / 完全告知 / ボーナス主体（RT非搭載ピュア・エディション / 30φ）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG（エディション共通解析）: **1/318.1 / 1/309.1 / 1/297.9 / 1/277.7 / 1/264.3 / 1/248.2**
- REG（エディション共通解析）: **1/337.8 / 1/327.7 / 1/321.3 / 1/297.9 / 1/282.5 / 1/262.1**
- 合算: **1/163.8 / 1/159.1 / 1/154.6 / 1/143.7 / 1/136.5 / 1/127.5**
- シミュレートPAYOUT: **96.92 / 98.54 / 100.74 / 104.64 / 107.75 / 111.55%**
- 1000円/50枚あたりゲーム数: **36.37 / 36.67 / 37.28 / 37.73 / 38.23 / 38.55G**
- BIG: **345枚を超える払い出しで終了 / 約312枚**
- REG: **105枚を超える払い出しで終了 / 約104枚**
- RT/ART/AT/CZ: **NOT_APPLICABLE_PURE_EDITION**。バーニング版のネオクラッシュモードを流用しない。
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `coreStatus: PARTIAL`（30φ固有型式・独立スペック照合待ち）

### resetBehavior（321）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。機種名表記揺れ、PureEdition30、プレミアムビスカス30、エマと設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目を組み替え、当時業界・解析・古いDB・後年一覧まで再探索したが本30φ固有挙動は確定できず。
- `carryOverBehavior`: `NO_GAME_COUNT_CEILING_OR_MODE_TO_CARRY_CONFIRMED`。RT/ART/AT/CZ/通常時モード/ゲーム数天井を持つ公開仕様は確認されない。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。
- `gameCounterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING`。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `stateAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: リセット固有短縮天井 `NOT_APPLICABLE`、リセットモード振り分け/朝一当選率/恩恵発生率 `NONE_CONFIRMED_AFTER_RESEARCH`。

## 321主要出典

取得日: 2026-09-02

- https://www.all7.jp/plans/index/2008/12/10 — ALL7。プレミアムビスカスの2008-12-08導入予定。
- https://web-greenbelt.jp/00003852/ — グリーンべると。2008-10-23発表、ピュア/バーニング仕様分離、ピュア『プレミアムビスカス』25φ/30φ双方の存在、ピュアはネオクラッシュモード非搭載。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/a.php — パチマガスロマガ。ピュア・エディション共通の基本システム、BIG/REG払い出し・実獲得枚数。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/h.php — パチマガスロマガ。ピュア・エディション共通の設定別BIG/REG/合算、シミュレートPAYOUT。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/c.php — パチマガスロマガ。ピュア・エディション共通の設定別1000円あたりゲーム数36.37～38.55G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/ema_slot_31.php — パチマガスロマガ。攻め時・ヤメ時『特にナシ』。
- https://pacnk.com/photoslot/mlist_2008.html — 後年DB。ピュア25/30、バーニング25/30を別名称で2008年12月掲載。
- https://pacnk.com/slot/s/mlist_i.html — 後年DB。ピュアエディション30の独立機種名・2008.12掲載（詳細未載）。

## 境界監査・重複防止

- **既存321件の再追加禁止。**
- `いみそ～れ2ピュアエディション30` の型式名は30φ固有一次/業界DBを回収できていない。25φP-WORLDの `イミソーレ2H` を30φへ自動転記しない。
- パチマガスロマガのピュア版解析は径別表記なし。グリーンべるとがピュア版に25φ/30φ双方を明記するためエディション共通値として保存したが、30φ固有表が見つかれば照合し、差があれば `CONFLICT` または別性能として修正する。
- 今回の再探索でパチマガスロマガにピュア版の設定別1000円あたりゲーム数 **36.37～38.55G** が現存することを確認。320（25φ）のbase欠損は次回QAで追記可能だが、新規本線を止めないため今回は321処理を優先。
- バーニング25/30は2008年12月導入までは複数後年資料で一致するが、具体導入日をまだ確定できていない。ALL7 12/08一覧にはピュア版のみ明示されるため、バーニングを12/08と推測しない。

## 次回再開地点

1. **LATEST_HANDOFF基準321件地点 / 2008-12-08境界。**
2. 最優先で `いみそ～れ2バーニングエディション25` / `30` の実納品・初回ホール導入日を当時業界記事、販売資料、P-WORLD、古いホール新台記録まで再探索する。12/08以前または同日が確定すれば最古の未処理版から322件目へ進む。
3. バーニング版の具体日が12/08より後または月精度止まりの場合、12/08確定群 `ぱちスロST ゴジラ` → `ぱちスロST 行け!稲中卓球部` → `ウルトラマン・ザ・スロット` → `カイジ2` → `ハイサイ蝶特急` の既存登録有無を監査し、時系列最古の未処理機を322件目として処理する。
4. バーニング版ではRT『ネオクラッシュモード』の突入契機・継続条件・純増、性能コアとv0.7 `resetBehavior` を同時収集し、ピュア版性能を流用しない。
5. 各欠損は表記揺れ・型式・メーカー・シリーズ名と資料系統を変えて十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
