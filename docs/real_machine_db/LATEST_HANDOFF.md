# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 177件目 `ザ・ドゥーナッツのトンdeピース`（ラスター、2007-09）までを継承。
- **178件目として `サザンドリーム`（ネイチャー・アセスメント、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_southern-dream.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `bf79bda4498c590ac5f2522d4ecb86904ce765d1`

## 178. サザンドリーム

- manufacturer: ネイチャー・アセスメント
- formalModel: `UNVERIFIED`
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ノーマル / 完全告知 / ボーナス主体
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- P-WORLDは「パチスロ」「ネイチャー・アセスメント」「5号機、ノーマル」「導入開始2007年09月」と掲載。
- 5号機クロニクルもネイチャー・アセスメント2007年導入機種としてサザンドリームを掲載し、導入時期2007/9。
- 後年の検定通過まとめでは2007-06-28に `サザンドリーム（回胴）` の検定通過記録あり。
- 具体的なホール納品開始日の高信頼資料は今回確定できなかったため、日付を推測せず月精度 `2007-09` を採用。

### 性能コア

| 設定 | BIG | REG | 合算 | PAYOUT |
|---|---:|---:|---:|---:|
| 1 | 1/394.8 | 1/630.2 | 1/242.7 | 96.90% |
| 2 | 1/385.5 | 1/630.2 | 1/239.2 | 98.96% |
| 3 | 1/376.6 | 1/630.2 | 1/235.7 | 100.78% |
| 4 | 1/376.6 | 1/574.9 | 1/227.6 | 102.03% |
| 5 | 1/376.6 | 1/512.0 | 1/217.0 | 104.64% |
| 6 | 1/376.6 | 1/481.9 | 1/211.4 | 107.07% |

- 設定別BIG/REG/合算/PAYOUTはパチマガスロマガ保存ページから取得。
- 5号機クロニクルの機械割 96.9 / 99.0 / 100.8 / 102.0 / 104.6 / 107.1% は上記の丸めと整合。
- BIG純増約351枚、REG純増約104枚。
- パチマガスロマガは基本システムを `ノーマル/完全告知/同時成立あり` としている。
- P-WORLDも5号機ノーマル扱い。出玉増加型RT/ART/ATは確認していない。
- 50枚/1000円ベースはパチマガスロマガ当時ページ自体が `現在調査中`。機種名・メーカー名・1000円・50枚・ベース・コイン持ち・型式等へ検索語を変え、P-WORLD、5号機クロニクル、保存解析資料を横断したが確定値を得られず `UNVERIFIED`。
- P-WORLD掲示板の1K高回転という個人投稿は単発実戦値のため性能値には採用しない。

### CONFLICT / 定義差

- REG払い出し終了条件は、P-WORLDが `105枚以上で終了`、パチマガスロマガが `規定払い出し120枚（純増104枚）` と表現差あり。
- 性能比較値は純増約104枚を採用し、終了条件の記述差は平均・補正せず注記として保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: 通常時天井に相当するゲーム数管理は `NOT_APPLICABLE / NONE_CONFIRMED`
- ceilingAfterReset: リセット短縮天井 `NONE_CONFIRMED`
- modeAfterReset: 朝一専用モード / 設定変更時モード振り分け `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: CZ/RT/ART状態管理は `NOT_APPLICABLE / NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: 本機固有ガックン、初期出目、ランプ等による変更判別は `UNVERIFIED`
- numericResetData: 公開朝一専用数値 `NONE_CONFIRMED`
- パチマガスロマガの「攻め時・ヤメ時」は `特にナシ`。
- `サザンドリーム 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード`、メーカー名併記等へ検索語を変更したが、本機固有の設定変更/電断処理や変更判別を直接示す高信頼資料は確定できなかった。

## 主要出典

### サザンドリーム
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/a.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/h.php
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/c.php
- パチマガスロマガ 機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/nature_slot_04.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4877
- 5号機クロニクル: https://5goki.com/nature-assessment
- 検定通過まとめ: https://q-and-a.hatenablog.com/entry/2016/10/23/110857

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準178件地点から継続。** 2007年9月の月精度残候補を漏れ防止優先で閉じる。
2. 次の候補は `ハイサイネオ / マスクオブゾロ / 学習パチスロ国語`。具体納品日を確定できなければ、複数資料で2007年9月導入を確認したうえで `2007-09` の月精度で登録する。
3. 残候補同士の時系列は、メーカー/業界記事の納品開始日が取れればそれを優先。取れなければ月精度のまま漏れ防止を優先し、推測日付は作らない。
4. 2007年9月を閉じた後に2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
5. resetBehavior遡及QAは、新規収集を止めず、2006年5月以降でresetBehavior未収集の最古既存機を最新mainから再確認して順次補完する。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
